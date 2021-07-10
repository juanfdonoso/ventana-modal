/* los valores de estas variables DEBEN coincidir con el alto y ancho de la ventana especificado en los estilos*/
var anchoVentana = 600;
var altoVentana = 400;
var idvm;

function mostrarVentana(id){
	//medimos la ventana
	var w = window.innerWidth;
	var h = window.innerHeight;
    idvm = id;
	
	var v = document.getElementById("pb").style;
	
	//hacemos crecer la pantalla de bloqueo al tamaño de la ventana, la hacemos visible
	// y cambiamos su opacidad
	v.width = w + "px";
	v.height = h + "px";
	v.visibility = "visible";
	v.opacity = 0.8;
	
	//corremos ahora la función que baja la ventana de login una vez que ha aparecido
	//completamente la pantalla de bloqueo
	//setTimeout("moverVentana("+id+")", 400);
    setTimeout(moverVentana, 400, id);
	
}

function moverVentana(id){
	//para centrar la ventana de login, debemos medir otra vez la pantalla
	var w = window.innerWidth;
	var h = window.innerHeight;
	
	//movemos la ventana al centro de la pantalla y luego la bajamos a la posición deseada
	var posX = (w - anchoVentana)/2;
	var posY = 150;
	var ventana = document.getElementById(id).style;
	ventana.left = posX + "px";
	ventana.top = posY + "px";
}

//escribimos una función que recalcule el tamaño de la pantalla de bloqueo y reposicione en el 
//centro de la pantalla la ventana modal cada vez que cambiamos el tamaño de la ventana del
//navegador
window.onresize = function(){
	//calculamos el tamaño de la ventana
	var w = window.innerWidth;
	var h = window.innerHeight;
	var pb = document.getElementById("pb").style;
	var vm = document.getElementById(idvm).style;
	pb.width = w + "px";
	pb.height = h + "px";
	vm.left = (w - anchoVentana)/2 + "px";
}

function cerrarVentanaModal(id){
	//subimos la ventana modal fuera de la ventana del navegador
	var vm = document.getElementById(id).style;
	vm.top = -(altoVentana+50) + "px";
	
	//ahora desbloqueamos la pantalla.
	var t = setTimeout('document.getElementById("pb").style.opacity = 0;', 600);
	
	//ahora corremos la función que esconda y encoja la pantalla de bloqueo
	var t1 = setTimeout("retirarBloqueo()", 900);
}

function retirarBloqueo(){
	var pb=document.getElementById("pb").style;
	pb.visibility = "hidden";
	pb.width = 1+"px";
	pb.height = 1+"px";
	
}