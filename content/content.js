// Write all your JavaScript and JQuery code in this file! :)
var value = 0;
$("#counter").on("click", function () {
    value++;
    $("#titl").text(value.toString());

});
$("#reset").on("click", function () {
 
    value = 0;
    $("#titl").text(value.toString());
    
});


