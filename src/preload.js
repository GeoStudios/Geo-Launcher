window.loadItem = require
const modules = {
    
    path:require("path"),
    fs:require("fs")
    
}

window.modules = modules

function filepath(file2){
    return modules.path.join(modules.path.dirname(__filename), file2)
}

window.apiVer = "1.0"
window.addEventListener("DOMContentLoaded", ()=>{
    
    for (let i = 0; i < 63; i++){
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