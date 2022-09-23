var nomes=[];
//insere no final do array
nomes.push("Lucas");
nomes.push("Luana");
nomes.push("Neymar");

//inserir no inicio do array
nomes.unshift("Carlinhos Maia");
nomes.unshift("Malphite Maconha");

//remover o ultimo elemento do array
nomes.pop();

//remove o primeiro elemento do array
nomes.shift();

//remove o primeiro mais a quantidade de vezes do numero a direita
nomes.splice(0,1)

//pega a posição do elemento
console.log(nomes=indexOf("Carlinhos Maia"));

//ordena
nomes.sort();

//ordena ao contrario
nomes.reverse();