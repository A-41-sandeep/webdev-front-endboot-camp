import { 
    getDatabase,set,get,update,remove,ref,child,
 } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";
  

var inputs=document.querySelectorAll("input");
var gender=document.querySelector("select");

var buttons=document.querySelectorAll(".btns");

const db=getDatabase();
var rollV, nameV, genderV, addressV;

buttons[0].onclick=create;
buttons[1].onclick=read;
buttons[2].onclick=updat;
buttons[3].onclick=delt;

function cleardata()
{
    inputs[0].value="";
    inputs[1].value="";
    inputs[2].value="";
    gender.value="";
}

function readData()
{
    console.log(inputs[0].value,inputs[1].value,gender.value,inputs[2].value);
    rollV=inputs[0].value;
    nameV=inputs[1].value;
    genderV=gender.value;
    addressV=inputs[2].value;
    cleardata();
}

function create(event)
{
    event.preventDefault();
    readData();

    if(rollV == "" || nameV == "" || genderV == "" || addressV == "")
    {alert("fields can not be blank");}
    else{
        set(ref(db,"data/"+rollV),{
        roll_No:rollV,
        name:nameV,
        gender:genderV,
        address:addressV
        }
    ).then(()=>{
        alert("data created successfully");
    }).catch((error)=>{
        alert("unsuccessfull",error);
    });
    }
}
function read(event)
{
    event.preventDefault();
    readData();
}
function delt(event)
{
    event.preventDefault();
    readData();
}
function updat(event)
{
    event.preventDefault();
    readData();
}





