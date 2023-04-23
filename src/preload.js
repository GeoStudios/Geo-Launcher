window.loadItem = require
window.path = require('path')
window.fs = require('fs')
window.apiVer = "1.0"

window.addEventListener("DOMContentLoaded", ()=>{

    for (let i = 0; i < 117; i++){
        const programs = document.getElementById("programs")
        const program = document.createElement("button")
        program.setAttribute("id", "prgm"+(i+1))
        program.setAttribute("class", "prgmBtn")
        programs.append(program)
    }
    require("../plugins/index.js")
})