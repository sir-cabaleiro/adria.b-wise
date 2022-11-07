function hola_aburrido() {
	var aburrido = document.getElementById("info_aburrida");
	var divertido = document.getElementById("info_divertida");
	if (aburrido.style.display === "none") {
		aburrido.style.display = "block";
		divertido.style.display = "none";
	} else {
		aburrido.style.display = "none";
	}
}

function hola_divertido() {
	var divertido = document.getElementById("info_divertida");
	var aburrido = document.getElementById("info_aburrida");
	if (divertido.style.display === "none") {
		divertido.style.display = "block";
		aburrido.style.display = "none";
	} else {
		divertido.style.display = "none";
	}
}

function bienvenido(){
	var superior = document.getElementById("entrada-sup");
	var inferior = document.getElementById("entrada-inf");
	superior.style.display = "none";
	inferior.style.display = "none";
	document.body.style.overflow = "visible";
	
}

function welcome() {
	var tit_pral = document.getElementById("tit-pral");
	centrar();
	tit_pral.style.display = "block";
	setTimeout( bienvenido , 2700 );
}

function centrar() {
	var izquierda = document.getElementById("izquierda");
	var derecha = document.getElementById("derecha");
	izquierda.style.width = "50%";
	derecha.style.width = "50%";
}

function derecha() {
	var izquierda = document.getElementById("izquierda");
	var derecha = document.getElementById("derecha");
	izquierda.style.width = "25%";
	derecha.style.width = "75%";
}

function izquierda() {
	var izquierda = document.getElementById("izquierda");
	var derecha = document.getElementById("derecha");
	izquierda.style.width = "75%";
	derecha.style.width = "25%";
}


window.onload = welcome;

$(document).ready(function(){
	$("form, #no, #thumbs").hide();
	$("#izquierda").mouseover(function(){
		$("#no").slideDown();
		$("#contacto, #tit-pral").css("background", "#495C83");
		$(".titulo, .contact-tit").css("color", "#fff");
		$("#derecha").css("border-radius", "10% 0% 0% 10%");
		$("#izquierda").css("border-radius", "0%");
		$("body").css("background", "#B2BBCF");
		$("polygon").css("fill", "#fff");
		$("input, textarea").css("border-color", "#fff");

	});
	$("#derecha").mouseover(function(){
		$("#thumbs").slideDown();
		$("#contacto, #tit-pral").css("background","#000");
		$(".titulo, .contact-tit").css("color", "#ff9504");
		$("#izquierda").css("border-radius", "0% 10% 10% 0%");
		$("#derecha").css("border-radius", "0%");
		$("body").css("background", "#000");
		$("polygon").css("fill", "#ff9504");
		$("input, textarea").css("border-color", "#ff9504");

	});
	$("#izquierda").mouseout(function(){
		/*$("#no").slideUp();*/
		$("#izquierda, #derecha").css("border-radius", "0% 0% 0% 0%");
	});
	$("#derecha").mouseout(function(){
		/*$("#thumbs").slideUp();*/
		$("#izquierda, #derecha").css("border-radius", "0% 0% 0% 0%");
	});
	$("#more-arrows").click(function(){
		$("form").slideDown();
		$("#more-arrows").slideUp();
	});

});


