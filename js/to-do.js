var list=document.getElementsByTagName("ul")[0];
var add=document.getElementById("plus");
var data=document.getElementsByTagName("input")[0];


function insertTask(){

var maindiv=document.createElement("div");
maindiv.classList.add("maindiv");
var li=document.createElement("li");
var delt=document.createElement("button");
delt.classList.add("delt");
var check=document.createElement("button");
check.classList.add("check");
    

li.innerText=data.value;
delt.innerHTML="<i class='fa fa-trash' aria-hidden='true'></i>";
check.innerHTML="<i class='fa fa-check-square' aria-hidden='true'></i>";

maindiv.appendChild(li);
maindiv.appendChild(check);
maindiv.appendChild(delt);

list.appendChild(maindiv);

data.value="";
}

function performAction(e)
{
    var item=e.target;
    if (item.classList[1] == "fa-check-square") {
        var parent = item.parentElement.parentElement;
        parent.classList.toggle("todo-done");
      }
      if (item.classList[1] == "fa-trash") {
        var parent=item.parentElement.parentElement;
        parent.remove();
      }
}

plus.onclick=insertTask;
list.onclick=performAction;




