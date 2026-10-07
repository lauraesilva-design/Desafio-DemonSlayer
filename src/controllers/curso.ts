import { Request, Response } from "express";
import { prisma } from "../../config/prisma";
import { handleErrors } from "../helpers/handleErroRs";

export default {
  list: async (request: Request, response: Response) => {
    try {
      const cursos = await prisma.curso.findMany({
        include: {
            alunos: true,
        },
      });

      return response.status(200).json(cursos);
    } catch (e) {
    return handleErrors(e, response)
    }
  },
};