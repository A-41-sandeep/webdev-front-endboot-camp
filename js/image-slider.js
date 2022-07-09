var images=document.querySelectorAll(".image");
var index=0;
var pre=document.getElementById("pre");
var next=document.getElementById("next");
pre.onclick=preImage;
next.onclick=nextImage;
function preImage()
{
    images[index].classList.remove("main-image");
    index=(index-1+images.length)%(images.length);
    images[index].classList.add("main-image");
}

function nextImage()
{
    images[index].classList.remove("main-image");
    index=(index+1)%(images.length);
    images[index].classList.add("main-image");
}