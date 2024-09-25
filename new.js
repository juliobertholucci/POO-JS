function User (nome, email){ //função de construção
    this.nome = nome; //atribui um contexto utilizando o this e o que vem após o = é o valor passado no parametro
    this.email = email;
    this.exibirInfos = function(){
        return `${this.nome}, ${this.email}`
    }
}

const novoUser = new User('Julio', 'j@j.com')
console.log(novoUser.exibirInfos());
