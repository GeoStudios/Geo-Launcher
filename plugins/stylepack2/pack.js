function filepath(file2){
    return path.join(path.dirname(__filename), file2)
}

LoadLib("Super/libs/stylepack/").setStyle(filepath, "styles/opt1.css")