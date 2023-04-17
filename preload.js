window.loadFile = require
window.loadLib = require
window.path = loadLib('path')
window.fs = loadLib('fs')

window.addEventListener("DOMContentLoaded", ()=>{

    for (let i = 0; i < 117; i++){
        const programs = document.getElementById("programs")
        const program = document.createElement("button")
        program.setAttribute("id", "prgm"+(i+1))
        program.setAttribute("class", "prgmBtn")
        programs.append(program)
    }
    loadFile("./plugins/index.js")
})