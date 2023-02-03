

const frame = document.getElementById("frame");
const result = document.getElementById("result");
const firstSize = document.getElementById("firstSize")
const secondSize = document.getElementById("secondSize")
const thirdSize = document.getElementById("thirdSize")
const rubber = document.getElementById("rubber");
const clean = document.getElementById("clean")

let selectedPoint = -1;

firstSize.onclick = ()=> {
    selectedPoint = 4;
}
secondSize.onclick = () => {
    selectedPoint = 8;
}
thirdSize.onclick = () => {
    selectedPoint = 12;
}
rubber.onclick = () =>{
    selectedPoint = 20;
}

function createPoint(element){
    switch(selectedPoint){
        case 4: { element.classList.add("firstSize");}
        break;  
        case 8: { element.classList.add("secondSize");}
        break;  
        case 12: {element.classList.add("thirdSize");}
        break;  
        case 20: {element.classList.add("rubber");}
        break;  
        default: {element.remove()}
    }
}
function drawPoint(x,y){
    let point = document.createElement("div");
    
    point.style.transform = `translate(${x-selectedPoint / 2}px, ${y-selectedPoint / 2}px)`
    frame.appendChild(point);
    createPoint(point);
   


}console.log(frame.offsetWidth)


let drawing = false;

frame.addEventListener("mousedown", (e)=>{
    
    if(e.offsetX >20 && e.offsetY >20 && (e.offsetX < frame.offsetWidth - 20) &&(e.offsetY < frame.offsetHeight - 20)){
        drawPoint(e.offsetX, e.offsetY);
    }
    drawing = true;
  
   
})


frame.addEventListener("mouseup", ()=>{
  drawing = false
    
})

frame.addEventListener("mousemove",function(e){
    if(drawing){
        if(e.offsetX >20 && e.offsetY >20 && (e.offsetX < frame.offsetWidth - 10) &&(e.offsetY < frame.offsetHeight - 10)){
            drawPoint(e.offsetX, e.offsetY);
        }
    }
    

    })



clean.onclick = () => {
    window.location.reload()
}