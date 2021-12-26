
var last_positionx,last_positiony 
canvas= document.getElementById("my_canvas")
ctx= canvas.getContext("2d")
color="aqua"
width=2
 var screen_width= screen.width
 var screen_height= screen.height
 var new_height=screen_height-300
 var new_width=screen_width-70

if (screen_width<992)
{ 
    document.getElementById("my_canvas").width=new_width
    document.getElementById("my_canvas").height=new_height

    document.body.style.overflow="hidden"

}
canvas.addEventListener("touchstart", mytouchstart)
function mytouchstart(e){
    color= document.getElementById("color").value
    width= document.getElementById("width").value
    last_positionx=e.touches[0].clientX-canvas.offsetLeft
   last_positiony=e.touches[0].clientY-canvas.offsetTop
    
    
}

canvas.addEventListener("touchmove", mytouchmove)
function mytouchmove(e){ currentx= e.touches[0].clientX-canvas.offsetLeft
    currrenty=e.touches[0].clientY-canvas.offsetTop

    
        ctx.beginPath();
ctx.strokeStyle =color
ctx.lineWidth =2

ctx.moveTo(last_positionx,last_positiony)
ctx.lineTo(currentx,currrenty)
ctx.stroke()
        
    
last_positionx= currentx
last_positiony= currrenty

}

function cleararea(){
    ctx.clearRect(0,0,600,800) 
}




