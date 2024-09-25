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

const admin = {
    nome:'Cesar',
    email:'cesar@gmail.com',
    nascimento: '2024-01-01',
    role: 'admin',
    ativo: true,
    criarCurso: function(){
        console.log('curso criado');  
    }
}

Object.setPrototypeOf(admin, user) //pega as propriedades (admin) e o objeto que entrega as propriedades (user)
admin.criarCurso()                 //agora o admin pode utilizar a função do user, usando um protótipo que herda uma propriedade de outro objeto
admin.exibirInfos()