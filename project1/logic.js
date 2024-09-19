const cp = document.querySelectorAll(`.color_picker`);
const bdy = document.querySelector(`body`);
const color = ["red","green","fuchsia","tan","yellow"];

function chang(col){
    bdy.style.backgroundColor = col;
    console.log(col);
}
cp[0].addEventListener("click",()=>{
    chang(color[0])
})
cp[1].addEventListener("click",()=>{
    chang(color[1]);
})
cp[2].addEventListener("click",()=>{
    chang(color[2]);
})
cp[3].addEventListener("click",()=>{
    chang(color[3]);
})
cp[4].addEventListener("click",()=>{
    chang(color[4]);
})
