for(i=0;i<256;i++){
const box=document.createElement("div");
const container=document.querySelector(".container");
box.style.height= "10px"
box.style.width="10px"
box.style.backgroundColor="white"
container.appendChild(box);
box.classList.add("box")

const reset=document.querySelector(".reset")
reset.addEventListener("click",restart)

function restart(){
    
   box.style.backgroundColor="white"
}

}
const box=document.querySelectorAll(".box")






box.forEach(box => box.addEventListener("mouseover",color))

function color(e){
   e.target.style.backgroundColor="black";

}