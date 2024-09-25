const user = {
    nome:'Julio',
    email:'julio@gmail.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email);
    }
}

//user.exibirInfos()

//const exibir = user.exibirInfos //quando passado de dentro do objeto para uma 
//const ela perde contexto (conexão com o objeto)
//exibir()

//seria como se fosse:
const exibir = function(){
    console.log(this.nome, this.email);
}

const exibirNome = exibir.bind(user) //bind linka com o objeto e gera um novo contexto
exibirNome()