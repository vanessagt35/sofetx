class Pessoa {
    constructor(nome, idade, filho = null) {
      this.nome = nome;
      this.idade = idade;
      this.filho = filho;
    }
  }
  
  // Criando as instâncias das pessoas
  const pessoa1 = new Pessoa("Alice", 30);
  const pessoa2 = new Pessoa("Gabriel", 40);
  const pessoa3 = new Pessoa("Carol", 25);
  
  // Estabelecendo as relações de pais e filhos
  pessoa1.filho = pessoa2;
  pessoa2.filho = pessoa3;
  
  // Função para percorrer a lista encadeada e imprimir informações
  function imprimirListaEncadeada(pessoa) {
    while (pessoa !== null) {
      console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
      if (pessoa.filho !== null) {
        console.log(`  Filho: ${pessoa.filho.nome}`);
      } else {
        console.log("  Filho: Nenhum");
      }
      console.log("-".repeat(30));
      pessoa = pessoa.filho;
    }
  }
  
  // Imprimir a lista encadeada
  imprimirListaEncadeada(pessoa1);
  