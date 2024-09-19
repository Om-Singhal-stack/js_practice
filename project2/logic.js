const sub = document.querySelector(`#sub`);
const re = document.querySelector(`#res`);
function textc(obj,txt){
    // const textadd = document.createTextNode(txt);
    // obj.appendChild(textadd);
    
    obj.innerText = `Your BMI: ${txt}`;
    
}
sub.addEventListener("click",(e)=>{
    e.preventDefault();

    console.log("1");
    const heinp = document.querySelector(`#he_input`);
    const boinp = document.querySelector(`#bo_input`);
    const out = document.querySelector(`#out_print>h4`);
    const inp1 = boinp.value;
    const inp2 = heinp.value;
  
    if(inp1<=0 || inp2<=0 ||inp1==='' || inp2==='' || isNaN(inp1) || isNaN(inp2)){
        textc(out,`pls fill both the input's`);
    }
    else{
         textc(out,`${inp1/(inp2*inp2)}`);
    }
})
re.addEventListener("click",()=>{
    location.reload();
})




