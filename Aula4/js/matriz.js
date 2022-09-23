var clientes = [["Marcos","1111-2222"],
                ["Jon Snow","1111-2222"],
                ["Parker","1111-2222"]];

//adicionar elemento na matriz
clientes.push(["Ana Maria Braga", "3333-4444"],["Faustão", "3333-5555"], ["Toguro", "3333-444"])


//imprimir os dados da matriz
clientes.forEach(c => {
    console.log(c);
});

let numeros=[100,200,300,400];
let numeros2=[500,600,700,800];
//recebe todos os elemento do vetor separados por virgula
let num = numeros.join();
console.log(num);

//une dois vetores em uma matriz
let unirVetores = numeros.concat(numeros2);
console.log(unirVetores);
