import bcrypt from "bcrypt";
import { prisma } from "../config/prisma";

async function main() {
    const funcionario = await prisma.funcionarios.create({
        data: {
            nome: "Admin",
            email: "admin@gmail.com",
            cargo: "ADMIN",
            cpf: "12345678921",
            nascimento: new Date("09/05/1990"),
            senha: bcrypt.hashSync("8977", +process.env.BCRYPT_ROUNDS!),
        },
    });

    console.info("Funcionário criado:", funcionario);
}

main()
.catch((e) => {
    console.error(e);
    process.exit(1);
})
.finally(async () => {
 await prisma.$disconnect();
});