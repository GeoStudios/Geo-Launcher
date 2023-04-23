// 1.0
try {
    window.loadItem = loadFile
    window.loadItem = loadLib
}catch{
    console.log("1.0 Support Error")
}
// 2.0
try {
    window.loadFile = loadItem
    window.loadLib = loadItem
}catch{
    console.log("2.0 Support Error")
}

function filepath(file2){
    return path.join(path.dirname(__filename), file2)
}

window.ShowError = (errormsg)=>{
    alert("Error: "+errormsg)
}

function loop(num, func){
    for(let i=0;i<num;i++){
        func(i)
    }
}

window.loop = loop

window.CbaseSupported = "1.0, 2.0"