import { Router } from "express";
import personagemController from "./controllers/personagem";
import  usuarioController from "./controllers/usúario";
import { authentication } from "../middlewares/authentication";


// Inicializa o router
const routes = Router();

//Rota inicial para verificar se o servidor está rodando
routes.get("/", (request, response) => {
    return response.status(200).json({ message: "Hello Word!" });
});

// Rotas dos personagens
routes.get("/personagens", personagemController.list);
routes.get("/personagens/:id", personagemController.getById);
routes.post("/personagens", authentication,personagemController.create);
routes.put("/personagens/:id", authentication,personagemController.update);
routes.delete("/personagens/:id",authentication, personagemController.delete);

// Rotas do usuario
routes.post("/login", usuarioController.login);

export default routes;



//# Criar uma API (backend) relacionada a animes

//1. Escolha um anime para ser o tema da sua API
//2. Crie duas tabelas (usuários e personagens) e escolha as colunas que mais fazem sentido para esse anime
//3. Crie as rotas e controllers para [listar, pegar dados, criar, atualizar e deletar personagens]
//4. Crie uma rota de login para os usuários
//5. As rotas de criar, atualizar e deletar personagens devem ter autenticação por jwt
//6. Use um arquivo seed para criar o(s) usuários
//7. Entrega 19/10