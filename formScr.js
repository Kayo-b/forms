var output = document.getElementById("output")
var defcon = document.getElementById("level")
var label1 = document.querySelector('.defconLabel')
var image = document.getElementById('image')
// var drag = 
// var output = document.querySelector("#output")
// var defcon = document.querySelector("#level")

output.textContent = defcon.value
label1.style.color = "green"

defcon.addEventListener("input", (e)=>{
    output.textContent = defcon.value

    if(defcon.value == 0){
        label1.style.color = "green"
        label1.style.fontWeight = ""
        mage.src = ""
    }
    else if(defcon.value == 1){
        label1.style.color = "yellow"
        label1.style.fontWeight = ""
        mage.src = ""
    }
    else if(defcon.value == 2){
        label1.style.color = "orange"
        label1.style.fontWeight = ""
        mage.src = ""
    }
    else if(defcon.value == 3){
        label1.style.color = "#bb1600"
        label1.style.fontWeight = ""
        image.src = ""
    }
    else if(defcon.value == 4){
        label1.style.color = "red"
        label1.style.fontWeight = "bold"
        image.src = "nuke-radio-active.gif"
        output.textContent = ""
        

    }
})

