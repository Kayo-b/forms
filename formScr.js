var output = document.getElementById("output")
var defcon = document.getElementById("level")
var label1 = document.querySelector('.defconLabel')
var image = document.getElementById('image')
var nuke = document.getElementById('nuke')
const svg = document.getElementById("rect")
const circle = document.getElementById("svg-circle")
const circle2 = document.getElementById("svg-circle2")
const exclam = document.getElementById("!")
let x = 20
let y = 20
// var drag = 
// var output = document.querySelector("#output")
// var defcon = document.querySelector("#level")

output.textContent = defcon.value
label1.style.color = "green"

var move = function(){
    svg.style.height = 20

}


defcon.addEventListener("input", (e)=>{
    output.textContent = defcon.value

   
    if(x<5){
        circle.setAttribute("r",x++)
        circle2.setAttribute("r",y++)
    }
    if(x<=20){
        circle.setAttribute("r",x--)
        circle2.setAttribute("r",y--)
    }
    

    if(defcon.value == 0){
        label1.style.color = "green"
        label1.style.fontWeight = ""
        image.src = ""
        nuke.src = ''
        svg.setAttribute("height",10)
        

    }
    else if(defcon.value == 1){
        label1.style.color = "yellow"
        label1.style.fontWeight = ""
        image.src = ""
        nuke.src = ''
        svg.setAttribute("height",20)
    }
    else if(defcon.value == 2){
        label1.style.color = "orange"
        label1.style.fontWeight = ""
        image.src = ""
        svg.setAttribute("height",30)
    }
    else if(defcon.value == 3){
        label1.style.color = "#bb1600"
        label1.style.fontWeight = ""
        nuke.src = ''
        image.src = ""
        svg.setAttribute("height",40)
    }
    else if(defcon.value == 4){
        label1.style.color = "red"
        label1.style.fontWeight = "bold"
        nuke.src = "nuke-radio-active.gif"
        output.textContent = ""
        svg.setAttribute("height",65)
        exclam.textContent = "!"
        
        

    }
})

