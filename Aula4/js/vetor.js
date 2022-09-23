// 3 FORMAS de criar vetor no js
var frutas = new Array();
var cores=[];
var cursos = ["JAVA","HTML","CSS", "C++"];

cores.push("Vermelho");
cores.push("Verde");
cores.push("Rosa");

frutas.push("Banana");
frutas[1]= "Uva";
frutas.push("Abacaxi");

//console.log(cursos[0]);

console.log("-------------");


frutas.forEach(f => {
    console.log(f);
});