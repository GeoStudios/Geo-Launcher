function filepath(file2){
    return path.join(path.dirname(__filename), file2)
}

LoadPlugLib("stylepack").setStyle(filepath, "css/opt1.css")