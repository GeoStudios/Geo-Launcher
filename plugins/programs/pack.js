const { RunExecutable } = LoadLib("Super/libs/cmd")

function ClaimProgramSlot(programSlot, ProgramInfo, ProgramCommand){

    const prg=document.getElementById(`prgm${programSlot}`)
    prg.getElementsByTagName("img")[0].src = `../${ProgramInfo.ContentLogo.small_188}`
    const Program = () => {
        ProgramCommand(ProgramInfo)
    }
    prg.addEventListener("click", Program)

}

function LoadProgramIntoLarge(ProgramInfo){

    const g = document.getElementById("game")
    g.src = `../${ProgramInfo.ContentLogo.large_200}`
    const p = document.getElementById("playbtn")
    p.innerText = `Play ${ProgramInfo.Name}`
    p.addEventListener("click", ()=>{
        RunExecutable(ProgramInfo.startCommand)
    })
    document.getElementById("GameTitle").innerText = ProgramInfo.Name

}

ClaimProgramSlot(1, 
    {
        ContentLogo:{
            small_188:"programs/program1/program.png",
            large_200:"programs/program1/program.png"
        },
        Name:"MiniCal",
        DownloadUrl:"",
        startCommand:"java -jar programs/program1/SuperCal.jar"
    }
    , LoadProgramIntoLarge)