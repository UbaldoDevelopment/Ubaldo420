$(document).on("ready",configurarApp);

function configurarApp() {
	var canvas = document.getElementById("miCanvas");
	var ctx = canvas.getContext("2d");
	canvas.width = screen.availWidth;
	dibujoFooter(canvas,ctx)

}
