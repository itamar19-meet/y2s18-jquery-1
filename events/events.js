// Write all your JavaScript and JQuery code in this file! :)
/* START PROVIDED CODE */
var txt = document.getElementById("mas");
var lel = document.getElementById("movee");

function randomX() {
  return Math.random() * $(window).width();
 	
    	
}

function randomY() {
  return Math.random() * $(window).height();
}
/* END PROVIDED CODE */

// Write your code below this line :)
$("#movee").on("click", function () {
    $("#mas").css("top", randomY() +"px");
    ;
});
$("#movee").on("click", function () {
   
    $("#mas").css("left",randomX()+"px" );
})