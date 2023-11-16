function newColor(){
    const R = document.querySelector("#R-input")
    const G = document.querySelector("#G-input")
    const B = document.querySelector("#B-input")
    const color_square = document.querySelector("#color-output")

    color_square.style.background = `rgb(${R.value},${G.value},${B.value})` 
}