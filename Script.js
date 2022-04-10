let air=document.getElementById("air")
let water=document.getElementById("water")
let soil=document.getElementById("soil")
let noise=document.getElementById("noise")

let show=document.getElementById("more")
let view=document.getElementById("myframe")

air.onclick=()=>{
    view.src="./Pollution Components/Air.html"
    view.style.display="block";
    href="#myframe"
}

water.onclick=()=>{
    view.src="./Pollution Components/Water.html"
    view.style.display="block";
    href="#myframe"
}

soil.onclick=()=>{
    view.src="./Pollution Components/Soil.html"
    view.style.display="block";
    href="#myframe"
}

noise.onclick=()=>{
    view.src="./Pollution Components/Noise.html"
    view.style.display="block";
    href="#myframe"
}
view.onload = function()
{
    view.style.height = view.contentWindow.document.body.scrollHeight + 'px';
    // view.style.width = view.contentWindow.document.body.scrollWidth+'px';
}

