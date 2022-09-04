let test = async function() {
    let hello = await fetch("https://www.speedrun.com/api/v1/runs?max=1")
    console.log(hello.json)
}
