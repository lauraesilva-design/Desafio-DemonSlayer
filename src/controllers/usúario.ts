import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../../config/prisma";
import { handleErrors } from "../helpers/handleErrors";


export default {
  login: async (request: Request, response: Response) => {
    try {
      const { email, senha } = request.body;

      if (!email || !senha) {
        return response.status(400).json("Dados incompletos");
      }
      const usuario = await prisma.usuario.findUnique({
        where: {
          email,
        },
      });

      if (!usuario || !bcrypt.compareSync(senha, usuario.senha)) {
        return response.status(404).json("Email e/ou senha inválidos");
      }

      const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET!,
        {
          expiresIn: "1d",
        },
      );

      return response.status(200).json(token)
    } catch (e) {
      return handleErrors(e, response);
    }
  },

};