const pessoa = ["Dimitri", "Teixeira", 30, "Professor"]; // array

// pessoa.push("Brasileiro"); -- método de adicionar mais um elemento no array
//pessoa[pessoa.length] = "Casado"; // Outro exemplo de como adicionar mais um elemento no array

//alert(Array.isArray(pessoa)); // Esse método verifica se é um array e retorna true se realmente for

//pessoa.pop(); //Remove o último elemento da minha matriz

//pessoa.shift();//Remove o primeiro item da minha matriz

//pessoa.unshift("Gustavão");//Isso serve para adicionar um item ao array, mas na primeira posição

delete pessoa[0]; //isso vai deletar a primeira posição do array, mas não vai redefinir a sequência, vai deixar a posição 0 no caso como undefined.
document.getElementById("teste").innerHTML = pessoa.join(" <br> "); // o método join permite adicionar informações entre os elementos do array que foram substituído no element html