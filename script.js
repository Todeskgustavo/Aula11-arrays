// const pessoa = ["Dimitri", "Teixeira", 30, "Professor"]; // array

// pessoa.push("Brasileiro"); -- método de adicionar mais um elemento no array
//pessoa[pessoa.length] = "Casado"; // Outro exemplo de como adicionar mais um elemento no array

//alert(Array.isArray(pessoa)); // Esse método verifica se é um array e retorna true se realmente for

//pessoa.pop(); //Remove o último elemento da minha matriz

//pessoa.shift();//Remove o primeiro item da minha matriz

//pessoa.unshift("Gustavão");//Isso serve para adicionar um item ao array, mas na primeira posição

//delete pessoa[0]; //isso vai deletar a primeira posição do array, mas não vai redefinir a sequência, vai deixar a posição 0 no caso como undefined.
// pessoa.splice(1, 0, "Item adicionado 1", "item adicionado 2");

const jogadores = ["Biro Biro", "Ribamar", "Pelé", "Maradona"]; //array
const craques = jogadores.slice(2);

document.getElementById("teste").innerHTML = craques;