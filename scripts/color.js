function newColor(){
    const R = document.querySelector("#R-input")
    const G = document.querySelector("#G-input")
    const B = document.querySelector("#B-input")
    const color_square = document.querySelector("#color-output")

    color_square.style.background = `rgb(${R.value},${G.value},${B.value})` 
}

function newGradient(){
    const R0 = document.querySelector("#R0-input").value
    const G0 = document.querySelector("#G0-input").value
    const B0 = document.querySelector("#B0-input").value

    const R1 = document.querySelector("#R1-input").value
    const G1 = document.querySelector("#G1-input").value
    const B1= document.querySelector("#B1-input").value

    const deg = document.querySelector("#deg-input").value

    const section = document.querySelector("#linear-gradient")


    section.style.background = `linear-gradient(${deg}deg, rgb(${R0}, ${G0}, ${B0}), rgb(${R1}, ${G1}, ${B1}))`
}

