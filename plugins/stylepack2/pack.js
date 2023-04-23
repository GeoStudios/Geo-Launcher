function filepath(file2){
    return modules.path.join(modules.path.dirname(__filename), file2)
}

LoadLib("Super/libs/stylepack/").setStyle(filepath, "styles/opt1.css")