import bcrypt from "bcrypt";
import { prisma } from "../config/prisma";

async function main() {
    const usuario = await prisma.usuario.create({
        data: {
            nome: "Jogador",
            email: "jogador@gmail.com",
            nascimento: new Date("02/04/2005"),
            senha: bcrypt.hashSync("8007", +process.env.BCRYPT_ROUNDS!),
        },
    });

    console.info("Usuário criado:", usuario);
}

main()
.catch((e) => {
    console.error(e);
    process.exit(1);
})
.finally(async () => {
 await prisma.$disconnect();
});