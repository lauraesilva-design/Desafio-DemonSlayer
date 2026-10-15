import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../../config/prisma";
import { handleErrors } from "../helpers/handleErrors";


export default {
  list: async (request: Request, response: Response) => {
    try {
      const personagem = await prisma.personagem.findMany({
        where: {

        },
      });

      return response.status(200).json(personagem);
    } catch (e) {
      return handleErrors(e, response);
    }
  },

  getById: async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const personagem = await prisma.personagem.findUnique({
        where: {
          id: +id,
        },
      });

      return response.status(200).json(personagem);
    } catch (e) {
      return handleErrors(e, response);
    }
  },

  create: async (request: Request, response: Response) => {
    try {
      const { respiracao, nome, patente, arma } =
        request.body;

      if (!respiracao || !nome || !patente || !arma ) {
        return response.status(400).json("Dados do personagem incompletos");
      }

      const personagem = await prisma.personagem.create({
        data: {
          respiracao,
          nome,
          patente,
          arma,
        },
      });

      return response.status(201).json(personagem);
    } catch (e) {
      return handleErrors(e, response);
    }
  },


  update: async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const { respiracao, nome, patente, arma } = request.body;

      const personagem = await prisma.personagem.update({
        where: {
          id: +id,
        },
        data: {
          nome,
          respiracao,
          patente,
          arma,
        },
      });

      return response.status(200).json(personagem);
    } catch (e) {
      return handleErrors(e, response);
    }
  },

  delete: async (request: Request, response: Response) => {
    try {
      const { id } = request.params;

      const personagem = await prisma.personagem.delete({
        where: {
          id: +id,
        },
      });

      return response.status(200).json(personagem);
    } catch (e) {
      return handleErrors(e, response);
    }
  },

};