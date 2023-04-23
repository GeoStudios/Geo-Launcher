function filepath(file2){
    return path.join(path.dirname(__filename), file2)
}

function LoadPlug(plug){
    return loadItem(filepath("../"+plug+"/pack.js"))  
}

function LoadPlugJson(plug){
    return loadItem(filepath("../"+plug+"/pack.json"))  
}

function LoadNest(plug, nest){
    return loadItem(filepath("../"+plug+"/sub/"+nest+".js"))  
}

function LoadLib(plug){
    return loadItem(filepath("../"+plug+"/lib.js"))  
}


window.LoadPlug = LoadPlug
window.LoadPlugJson = LoadPlugJson
window.LoadNest = LoadNest
window.LoadLib = LoadLib

LoadNest("Super", "cbase")
LoadNest("Super", "xpack")