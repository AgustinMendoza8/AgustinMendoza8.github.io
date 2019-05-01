$(document).ready(function() {


let xs = []

let start = 0;





var length = $(document).height() -$(".header").height();


for (var i = 0; i <= length; i++) {
    xs.push(start+i)
}

let t = 0

var clicked=false;

var aesthetic=false;
var analytical =false;
var about = false;

var amp = 8;
function wave() {
    
    let width =$(".divider").width()*.47;
    
    $(".about").click(function(){
        $("#analytical").fadeOut(950);
        $("#aesthetic").fadeOut(950);
        clicked = true;
        about = true;
    })


    let points = xs.map(x => {
        
        let y = width + amp*Math.sin((-x + t) / 10)
        
        return [y, x]
    })
    
    let path = "M" + points.map(p => {
        return p[0] + "," + p[1]
    }).join(" L")
    
    document.getElementById("linesvg2").setAttribute("d", path)

    
    
    t += 0.265
    $("#analytical").click(function(){
        $("#aesthetic").fadeOut(950);
        clicked = true;
        analytical=true;
    })
    $("#aesthetic").click(function(){
        $("#analytical").fadeOut(950);
        clicked = true;
        aesthetic = true;
    })



    if(clicked && analytical ||clicked && aesthetic ){
        amp*=.95;
        if(amp<= 0.2 && !about){
            amp*=0;
            requestAnimationFrame(wave);
           
            load()
            return;
        }
    } 

    if(clicked && about){
        amp*=.99;
      
        requestAnimationFrame(wave);
        aboutpageload();
        return;
        
    } 
    requestAnimationFrame(wave);



}
function aboutpageload(){
    console.log("here")
    $(".loadbarright").delay(1225).slideUp(1000);
    $(".loadbarleft").delay(1224.5).slideUp(1000);
    $('.divider').delay(950).slideUp(1000);
    
}


function load(){

    if(analytical){
        $("#linesvg1").fadeOut(1);
        $("#analytical").animate({width:"100%"},350);
        
    }
    if(aesthetic){
        $("#linesvg1").fadeOut(1);
        var a = $("#aesthetic").offset().left
        $("#aesthetic").css({left:a}).animate({width:"100%",left:"0%"},350);
    }
}


    wave();







	
});