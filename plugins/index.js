function filepath(file2){
    return path.join(path.dirname(__filename), file2)
}
const config = loadFile(filepath("enabledpacks.json"))
if (config.pack1 != ""){
    loadFile(filepath("./"+config.pack1+"/pack.js"))
}
if (config.pack2 != ""){
    loadFile(filepath("./"+config.pack2+"/pack.js"))    
}
