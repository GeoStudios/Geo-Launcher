function filepath(file2){
    return path.join(path.dirname(__filename), file2)
}
const config = loadFile(filepath("../config.json"))

const style = document.getElementsByTagName("link")[0]
style.setAttribute("href", filepath("../styles/opt"+config.style+".css"))
document.head.append(style)