// Criando a matriz bidimensional para armazenar informações sobre animais
var animais = [
    ["Leão", "Felino", 5],
    ["Elefante", "Mamífero", 10],
    ["Girafa", "Mamífero", 7],
    ["Tigre", "Felino", 4]
  ];
  
  // Função para imprimir as informações dos animais
  function imprimirAnimais(matrizAnimais) {
    for (var i = 0; i < matrizAnimais.length; i++) {
      var animal = matrizAnimais[i];
      var nome = animal[0];
      var especie = animal[1];
      var idade = animal[2];
      
      console.log("Animal: " + nome + " | Espécie: " + especie + " | Idade: " + idade + " anos");
    }
  }
  
  // Chamando a função para imprimir as informações dos animais
  imprimirAnimais(animais);
  