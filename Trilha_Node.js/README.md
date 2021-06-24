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
iniciar: yarn tsc --init
*Dica: mudar o "strict" do arquivo que gerar para false

converter para js: yarn tsc 