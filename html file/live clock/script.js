var hr=document.getElementById("hr");
var min=document.getElementById("min");
var sec=document.getElementById("sec");
var pr=document.getElementById("pr");
var bg=document.getElementsByTagName("body")[0];

setInterval(clock,1);

function clock()
{
var date=new Date();
var temphr=date.getHours();
// var temphr=20;

var messg=document.getElementById("wish-txt");
if(temphr>=5 && temphr<12){messg.innerText="Good Morning";}
else if(temphr>=12 && temphr<18){messg.innerText="Good Afternoon";}
else if(temphr>=18){
    messg.innerText="Good Evening";
    bg.classList.add("bg");
}
else{messg.innerText="";}


if(temphr==12)
{
    temphr=0;
    pr.innerText="PM";    
}
if(temphr>12)
{
    temphr=temphr%12;
    pr.innerText="PM";
}


hr.innerText=temphr+":";
min.innerText=date.getMinutes()+":";
sec.innerText=date.getSeconds();

}

var txt=document.getElementById("txt");
function storetxt(){
    localStorage.setItem("txt",txt.value);
}

txt.addEventListener("blur",storetxt);

txt.innerText=localStorage.getItem("txt");

