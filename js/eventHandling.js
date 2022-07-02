var para=document.getElementById("p1");
para.addEventListener("click",fun1);
function fun1(){
    alert("click done");
}

para.removeEventListener("click",fun1);