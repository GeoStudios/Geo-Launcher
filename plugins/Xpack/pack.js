function filepath(file2){
    return path.join(path.dirname(__filename), file2)
}
const config = loadFile(filepath("../packs.json"))
if (config.packs != []){
    for (let i = 0; i < config.packs.length; i++){
        loadLib(filepath("../"+config.packs[i]+"/pack.js"))   
    } 
}
