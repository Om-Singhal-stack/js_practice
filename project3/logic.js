const clock = document.querySelector(`#clock`);
const tex = document.createElement(`h1`);
clock.appendChild(tex);
function start_clock(){
setInterval(()=>{
    const date = new Date();
    const time  = date.toLocaleTimeString();
    // console.log(time);
    tex.innerText = time;
},1000);
}

start_clock();