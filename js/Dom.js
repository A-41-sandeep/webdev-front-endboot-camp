var x=document.getElementById("heading-1");
x.style.textAlign="center";
x.style.color="red";

var y=document.getElementsByClassName("p");
// y is a collection (0-indexed) conataing the all elements having class name ="p"; 
// we can't apply changes to the collections (p) baecause the properties are for elements not for collections.
y[1].style.color="red";
// document.write(y[1].textContent);

var z=document.getElementsByTagName("h1");
z[0].style.color="green";

// query Selector
var a=document.querySelector("h1"); //using tag
a.style.textAlign="right";

//queryselectorAll
var b=document.querySelectorAll("p");
b[0].style.textAlign="right";
b[1].style.textAlign="center";

var c=document.querySelector("#heading-1"); //using id 
c.style.textAlign="center";

var d=document.querySelector(".p");//using class name first element
d.style.color="blue";

var d=document.querySelectorAll(".p");//using class name all elements
d[1].style.color="orange";



