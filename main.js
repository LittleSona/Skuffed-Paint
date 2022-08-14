function game(){
let side = 16

for(i=0;i<side;i++){
    box=document.createElement("div");
    const container=document.querySelector(".container");
    box.style.backgroundColor="white"
    container.appendChild(box);
    box.classList.add("box")
    box.setAttribute("id","box")

        for(a=0;a<side;a++){
            const columBox=document.createElement("div");
            columBox.classList.add("columBox");
            box.appendChild(columBox);
            columBox.style.backgroundColor="white"


            const reset=document.querySelector(".reset")
            reset.addEventListener("click",restart)
            function restart(){
                columBox.style.backgroundColor="white"
            }}

            var box=document.querySelectorAll(".box")
            box.forEach(box => box.addEventListener("mouseover",color))
            function color(e){
            e.target.style.backgroundColor="black";
}}}








const size=document.querySelector(".size");
size.addEventListener("click", selectSize);
    function selectSize(){
    let side = prompt("How many pixels per side? (max is 100)")

    if(side>100){
        alert("MAX IS 100 PIXELS")
    }

    document
    .querySelectorAll(".box")
    .forEach((e) => e.parentNode.removeChild(e));

    for(i=0;i<side;i++){
        box=document.createElement("div");
        const container=document.querySelector(".container");
        box.style.backgroundColor="white"
        container.appendChild(box);
        box.classList.add("box")
        
        for(a=0;a<side;a++){
            const columBox=document.createElement("div");
            columBox.classList.add("columBox");
            box.appendChild(columBox);
            columBox.style.backgroundColor="white"
        
            const reset=document.querySelector(".reset")
            reset.addEventListener("click",restart)
            function restart(){
            columBox.style.backgroundColor="white"
            }}
            var box=document.querySelectorAll(".box")
            box.forEach(box => box.addEventListener("mouseover",color))
            function color(e){
            e.target.style.backgroundColor="black";
}}}




game()