const { RunExecutable } = LoadLib("Super/libs/cmd")

function ClaimProgramSlot(programSlot, ProgramInfo, programCommend){

    const prg=document.getElementById(`prgm${programSlot}`)
    prg.getElementsByTagName("img")[0].src = `../${ProgramInfo.ContentLogo.small_188}`
    prg.addEventListener("click", programCommend)

}

ClaimProgramSlot(1, 
    {
        ContentLogo:{
            small_188:"programs/program1/program.png",
            large_200:""
        },
        DownloadUrl:"",
        startCommand:""
    }
    , RunExecutable("java -jar programs/program1/SuperCal.jar"))