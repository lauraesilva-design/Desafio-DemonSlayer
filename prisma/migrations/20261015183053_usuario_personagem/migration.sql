-- CreateTable
CREATE TABLE "Personagem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "respiracao" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "patente" TEXT NOT NULL,
    "arma" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "nascimento" DATETIME
);

-- CreateIndex
CREATE UNIQUE INDEX "Personagem_respiracao_key" ON "Personagem"("respiracao");

-- CreateIndex
CREATE UNIQUE INDEX "Personagem_nome_key" ON "Personagem"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Personagem_patente_key" ON "Personagem"("patente");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
