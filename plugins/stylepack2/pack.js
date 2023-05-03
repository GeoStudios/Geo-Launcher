/* Gets the full path of any file in the plugin */
const filepath = (file)=> { return getFilePath(file, __filename) }

/* Loads Stylepack Lib*/
const StylePack = LoadLib("Super/libs/stylepack")
/* Load Up the Plugin Within the Launcher*/
StylePack.setStyle(filepath, "styles/opt1.css")