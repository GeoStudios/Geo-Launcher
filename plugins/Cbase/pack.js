// 1.0
try {
    window.loadItem = loadFile
    window.loadItem = loadLib
}catch{}
// 2.0
try {
    window.loadFile = loadItem
    window.loadLib = loadItem
}catch{}

function filepath(file2){
    return path.join(path.dirname(__filename), file2)
}

function LoadPlug(plug){
    return loadItem(filepath("../"+plug+"/pack.js"))  
}

function LoadPlugJson(plug){
    return loadItem(filepath("../"+plug+"/pack.json"))  
}

function LoadPlugLib(plug){
    return loadItem(filepath("../"+plug+"/lib.js"))  
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
window.LoadPlugLib = LoadPlugLib
window.LoadPlugJson = LoadPlugJson
window.loop = loop

window.CbaseSupported = "1.0, 2.0"