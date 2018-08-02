// Write all your JavaScript and JQuery code in this file! :)

var x = 0; // rotation of X
var y = 0; // rotation of Y
var z = 0; // rotation of Z
function updateSize(newSize) {
  // FINISH ME! Set the width of the MEET logo to be newSize in pixels.
  $("#imm").css("width", newSize);
  $("#imm").css("height", newSize);


}
//rotation
function updateRotation() {
	$("#imm").css("transform", "rotateX("+ x +"deg) rotateY("+ y +"deg) rotateZ("+ z +"deg)");
	// $("#imm").css("transform", "skewY("+ y +"deg)");
	// $("#imm").css("transform", "scaleY("+ z +")");


  // FINISH ME! Set the rotation of the MEET logo based on the values of (x, y, z) (see above!)
}

function updateXRotation(newX) {
  x = newX;
  updateRotation();
}

function updateYRotation(newY) {
  y = newY;
  updateRotation();
}

function updateZRotation(newZ) {
  z = newZ;
  updateRotation();
}