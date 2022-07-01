var newE=document.createElement("h1");
newE.textContent="this is h1 heading";
document.write(newE.textContent);

//create and append new elements to the existing nodes.
var tr=document.createElement("tr");

var td1=document.createElement("td");
td1.textContent="1";
var td2=document.createElement("td");
td2.textContent="sandeep";
tr.appendChild(td1);
tr.appendChild(td2);
document.getElementById("table1").appendChild(tr);


//remove an element
var ele=document.getElementById("p1");
var parent=document.getElementById("d1");
// document.write(parent);
parent.removeChild(ele);