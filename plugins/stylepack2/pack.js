function filepath(file2){
    return path.join(path.dirname(__filename), file2)
}

LoadLib("Super/libs/stylepack/").setStyle(filepath, "syles/opt1.css")