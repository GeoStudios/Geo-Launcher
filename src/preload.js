function filepath(file2){
    return path.join(path.dirname(__filename), file2)
}

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

    const config = require(filepath("../config/Plugins.json"))
    if (config.pack1 != ""){
        require(filepath("../plugins/"+config.pack1+"/pack.js"))
    }
    if (config.pack2 != ""){
        require(filepath("../plugins/"+config.pack2+"/pack.js"))    
    }
    
})