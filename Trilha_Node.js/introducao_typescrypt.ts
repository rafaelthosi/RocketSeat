
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