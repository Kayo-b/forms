var printHello = document.getElementById("username")
var greetingOutput = document.getElementById("greeting")
var greetB = document.getElementById("greetBtn")

greetB.addEventListener('click', (e) =>{
    greetingOutput.innerText = `hello ${printHello.value}`;
})