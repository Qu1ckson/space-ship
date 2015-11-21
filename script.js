var tiltAngle = {
};
tiltAngle.rotate = 0;
tiltAngle.top = 0;

$('html').keydown(function(eventObject){ //отлавливаем нажатие клавиш
  if (event.keyCode == 38) { //up
    var img = document.getElementById("ship");
	tiltAngle.top -= 5;
	//img.style.left = e.pageX - dragObject.shiftX + 'px';
    img.style.top = tiltAngle.top + 'px';
	//img.outerHTML = "<img id=\"ship\" style=\"transform: translateY(" + -100 + ");\" src=\"ship.jpg\">";
  }
  if (event.keyCode == 40) { //down
	var img = document.getElementById("ship");
	tiltAngle.top += 5;
	img.style.top = tiltAngle.top + 'px';
	//img.outerHTML = "<img id=\"ship\" style=\"transform: rotate(" + tiltAngle.rotate + "deg);\" src=\"ship.jpg\">";s
  }
  if (event.keyCode == 39) {// >
	tiltAngle.rotate +=10;
    var img = document.getElementById("ship");
	img.style.transform ="rotate(" + tiltAngle.rotate + "deg)";
  }
   if (event.keyCode == 37) { //<
    tiltAngle.rotate -=10;
    var img = document.getElementById("ship");
	img.style.transform ="rotate(" + tiltAngle.rotate + "deg)";
  }
});
