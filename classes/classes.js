// Write all your JavaScript and JQuery code in this file! :)
var ro = true
var bi= true
var hi= true


var red1 = 255;
var green1 = 255;
var blue1 = 255;

$("#rotate").on("click", function () {
    if(ro) { 

    	$("#mes").addClass("rotated");
    	ro = false;
}
	else{
		$("#mes").removeClass("rotated");
		ro  = true;
	}
});x="255" value
$("#big").on("click", function () {
    // $(this) refers to the element that was clicked
    if(bi){
    	$("#mes").addClass("big");
    	bi = false;
    }
    else{
    	$("#mes").removeClass("big");
    	bi = true;
    }
});
$("#hide").on("click", function () {
    // $(this) refers to the element that was clicked
    if(hi){
    	$("#mes").addClass("hidden");
    	hi = false;
    }
    else{
    	$("#mes").removeClass("hidden");
    	hi = true;
    }
});

function change_bgcolor (){
    $("body").css("background-color", "rgb"(red1+","+green1+","+blue1));


}

function reddish(red_co){
    red1=red_co;
    change_bgcolor();
}

function greenish(green_co){

    green1 = green_co;
    change_bgcolor();

}


function blueish(blue_co){
    blue1=blue_co;
    change_bgcolor();
}