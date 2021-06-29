# Detalhes vistos em curso

## Dia 1

### Introdução a TypeScrypt:
```
// nomeDaVariavel: tipoDaVariavel

interface Usuario {
    nome: string, email: string, telefone?: string // interrogação deixa a variavel não obrigatória
}

function enviarEmail({email, nome, telefone}: Usuario) {
    console.log(`Olá ${nome} seu email é ${email} e seu telefone é ${telefone}`)
    //
    //
    //
}

// fica dando erro até ter todas as obrigatórias, e da erro se o tipo estiver errado
enviarEmail({
    email: "teste@teste.com",
    nome: "teste"
})
```
### Dica para instalar depêndencia de dev:
"-D" para instalar uma dependência apenas para desenvolvimento usando yarn. Exemplo: "yarn add typescript -D"

### Iniciar Typescript:
Iniciar: yarn tsc --init
*Dica: mudar o "strict" do arquivo que gerar para false

Converter para js: yarn tsc 

Instalar biblioteca responsavel por converter código ts para uma forma que o Node seja capaz de entender: yarn add ts-node-dev -D

adicionar script no package.json: "dev": "ts-node-dev src/server.ts" 


## Dia 2

