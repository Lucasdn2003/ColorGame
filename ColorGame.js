let colors = generateRandomColors(6)
let square = document.querySelectorAll(".square")
let pickedColor = pickColor()
let colorDisplay = document.querySelector("#colorDisplay")
let massage = document.querySelector("#massage")
let clickedColor = ""
let boton = document.querySelector("#Reset")

colorDisplay.textContent = pickedColor

boton.addEventListener("click", function(){
    colors= generateRandomColors(6)
    pickedColor= pickColor()
    colorDisplay.textContent = pickedColor
    for(let i = 0; i<square.length; i++){
        square[i].style.background = colors[i]
    }
})


for(let i =0; i<square.length; i++){
    square[i].style.background = colors[i]
    square[i].addEventListener("click",
    function(){
        clickedColor = this.style.background
        if(clickedColor === pickedColor){
            massage.textContent = "Correct"
            document.querySelector("h1").style.background = pickedColor
            changeColors(pickedColor)
        }else{
            this.style.background = "#232323"
            massage.textContent = "Try again"
        }
    })
   
}

function changeColors(color){
    for(let i = 0; i<square.length; i++){
        square[i].style.background = color
    }
}

function pickColor(){
    let num = Math.floor(Math.random()*6)
        return colors[num]
}

function randomColor(){
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
        return "rgb("+r+", "+g+", "+b+")"
} 

function generateRandomColors(number){
    let array = []
    for(let i =0; i<number; i++){
        array[i] = randomColor()
    }
        return array
}






