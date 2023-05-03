const { RunExecutable } = LoadLib("Super/libs/cmd")

function ClaimProgramSlot(programSlot, ProgramInfo, ProgramCommand){

    const prg=document.getElementById(`prgm${programSlot}`)
    prg.getElementsByTagName("img")[0].src = `${ProgramInfo.ContentLogo.small_188}`
    prg.onclick = () => {
        ProgramCommand(ProgramInfo)
    }

}

function LoadProgramIntoLarge(ProgramInfo){

    const g = document.getElementById("game")
    g.src = `${ProgramInfo.ContentLogo.large_200}`
    const p = document.getElementById("playbtn")
    if (ProgramInfo.Name.includes("$NOPLAYCHANGE")){
        p.innerText = "Play"
    }else{
        p.innerText = `Play ${ProgramInfo.Name}`
    }
    p.onclick = ()=>{
        RunExecutable(ProgramInfo.startCommand.replace("^loc", ProgramInfo.NLocation).replace("^file", ProgramInfo.fileName))
    }
    document.getElementById("GameTitle").innerText = ProgramInfo.Name.replace("$NOPLAYCHANGE", "")

}

for (let i=1;i<61;i++){
    ClaimProgramSlot(i,
        {
            ContentLogo:{
                small_188:"https://github.com/GeoStudios/ContentStorage/blob/1bb213130a1bb00ea3a5a9466e1d241ed32d5466/GeoLauncher/NoProgram.png?raw=true",
                large_200:"https://github.com/GeoStudios/ContentStorage/blob/1bb213130a1bb00ea3a5a9466e1d241ed32d5466/GeoLauncher/NoProgram.png?raw=true"
            },
            Name:"Choose$NOPLAYCHANGE",
            DownloadUrl:"",
            fileName:"",
            NLocation:"",
            startCommand:"echo No Program Selected",
        }, LoadProgramIntoLarge

    )
}


ClaimProgramSlot(1, 
    {
        ContentLogo:{
            small_188:"../programs/program1/program.png",
            large_200:"../programs/program1/program.png"
        },
        Name:"MiniCal",
        DownloadUrl:"",
        fileName:"SuperCal.jar",
        NLocation:"programs/program1",
        startCommand:"java -jar ^loc/^file"
    }
    , LoadProgramIntoLarge)