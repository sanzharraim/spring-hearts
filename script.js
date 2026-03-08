window.onload = function(){

let answer = confirm("Are you from 7 'И'?")

if(answer){

document.getElementById("card").style.display = "block"
startHearts()

}else{

document.body.innerHTML = `
<h1 style="
color:white;
text-align:center;
margin-top:40vh;
font-family:Arial;">
This page is only for 7 'И'
</h1>
`

}

}

function startHearts(){

function createHeart(){

const heart = document.createElement("div")

heart.classList.add("heart")

heart.innerHTML = "❤️"

heart.style.left = Math.random()*100 + "vw"
heart.style.animationDuration = (4 + Math.random()*4) + "s"
heart.style.fontSize = (12 + Math.random()*18) + "px"

document.body.appendChild(heart)

setTimeout(()=>{
heart.remove()
},8000)

}

setInterval(createHeart,200)

}