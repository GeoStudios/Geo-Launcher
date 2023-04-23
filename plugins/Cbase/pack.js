// 1.0
try {
    window.loadItem = loadFile
    window.loadItem = loadLib
}catch{}
// 2.0
try {
    window.loadFile = loadItem
    window.loadLib = loadItem
1}catch{}

function filepath(file2){
    return path.join(path.dirname(__filename), file2)
}

function LoadPlug(plug){
    return loadItem(filepath("../"+plug+"/pack.js"))  
}

function LoadNest(plug, nest){
    return loadItem(filepath("../"+plug+"/sub/"+nest+".js"))  
}

function LoadPlugJson(plug){
    return loadItem(filepath("../"+plug+"/pack.json"))  
}

function LoadLib(plug){
    return loadItem(filepath("../"+plug+"/lib.js"))  
}

function LoadNestLib(plug, nest){
    return loadItem(filepath("../"+plug+"/sub/nest.js"))  
}

window.ShowError = (errormsg)=>{
    alert("Error: "+errormsg)
}

function loop(num, func){
    for(let i=0;i<num;i++){
        func(i)
    }
}

window.LoadPlug = LoadPlug
window.LoadLib = LoadLib
window.LoadPlugJson = LoadPlugJson
window.loop = loop

window.CbaseSupported = "1.0, 2.0"