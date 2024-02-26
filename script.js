let date ="26 dec 2024 10:00"
document.querySelector("#end-date").innerHTML = date
// let date = prompt("enter a date  formet = dd MM yyyy HH:mm")
let inputtime = document.querySelectorAll("input")

function girraj() {
    // x.preventDefault()
    let end = new Date(date)
    let now = new Date()
    let deferance = (end - now) /1000
    // console.log(deferance)

    if (deferance < 0) return;

    inputtime[0].value = Math.floor(deferance / 3600 / 24 )
    inputtime[1].value = Math.floor(deferance / 3600) % 24 
    inputtime[2].value = Math.floor(deferance / 60) % 60
    inputtime[3].value = Math.floor(deferance) % 60
    // console.log(Math.floor(deferance / 3600) % 24 )
    // console.log(Math.floor(deferance / 60 )% 60)
    // console.log(Math.floor(deferance)% 60 )
}
girraj()
setInterval(()=>{
    girraj()
    },1000)