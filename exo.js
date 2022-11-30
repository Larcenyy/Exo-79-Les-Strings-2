let pomme = "Elle est belle ma pomme !";
let indexPomme = document.getElementById("index-pomme");
let lastIndex = document.getElementById("last-index-m");
let myPomme = document.getElementById("pomme");
let myOne = document.getElementById("one-line");

indexPomme.innerHTML = pomme;
lastIndex.innerHTML = pomme;

console.log(pomme.lastIndexOf("m"));
console.log(pomme.indexOf("pomme"))

myPomme.innerHTML = pomme.substring(17, 23)

if (pomme.startsWith("Elle")){
    console.log(pomme + "Commence par elle")
}
if (pomme.endsWith("!")){
    console.log(pomme + "Se termine par un point d'exclamation")
}

myOne.innerHTML = pomme.slice()
