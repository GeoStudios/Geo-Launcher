function getFilePath(file2, currentFile){
    return path.join(path.dirname(currentFile), file2)
}

function LoadPlug(plug){
    return loadItem(getFilePath("../"+plug+"/pack.js", __filename))  
}

function LoadPlugJson(plug){
    return loadItem(getFilePath("../"+plug+"/pack.json", __filename))  
}

function LoadNest(plug, nest){
    return loadItem(getFilePath("../"+plug+"/sub/"+nest+".js", __filename))  
}

function LoadLib(plug){
    return loadItem(getFilePath("../"+plug+"/lib.js", __filename))  
}


window.LoadPlug = LoadPlug
window.LoadPlugJson = LoadPlugJson
window.LoadNest = LoadNest
window.LoadLib = LoadLib
window.getFilePath = getFilePath

LoadNest("Super", "cbase")
LoadNest("Super", "xpack")