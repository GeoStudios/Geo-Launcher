window.loadFile = require
window.loadLib = require
window.path = loadLib('path')
window.fs = loadLib('fs')
window.shell = loadLib('shell')

window.addEventListener("DOMContentLoaded", ()=>{
    loadFile("./plugins/index.js")
})