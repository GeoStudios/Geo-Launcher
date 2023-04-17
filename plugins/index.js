function filepath(file2){
    return path.join(path.dirname(__filename), file2)
}
const config = require(filepath("enabledpacks.json"))
if (config.pack1 != ""){
    require(filepath("./"+config.pack1+"/pack.js"))
}
if (config.pack2 != ""){
    require(filepath("./"+config.pack2+"/pack.js"))    
}
