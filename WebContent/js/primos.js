
var aciertos = 0;	//variable global para los aciertos inicalizada a 0

function comprobarPrimo(){		
	
	var esPrimo = true;
	var numero = document.getElementById("numero").value;
	
	//alert("-->" + numero);
	
	if(numero == "" || isNaN(numero)){	//comprobacion de que lo que introducimos es un numero
		
		document.getElementById('mensajes').innerHTML =
			"<p style='color:red;'>Debes introducir un numero!!</p>";
		limpiar();		
		return;
		
	}
	
	for (var i = 2; i < numero; i++) {
		
		if(numero % i == 0)	esPrimo = false;//Si al dividirlo por un numero, que no sea él mismo, su resto da 0, NO ES UN NUMERO PRIMO
												//La variable que va a decirno si sumar acierto cambia a false
					
	}
		
	if (esPrimo) {	//Si el numero es primo entra por el if y suma un acierto
		
		document.getElementById('mensajes').innerHTML =
			"<p style='color:geen;'>El " + numero + " es correcto +1</p>";	//Escribe un mensaje de acierto en un div vacio		
		aciertos++;
		
	}else {
		
		document.getElementById('mensajes').innerHTML = 
			"<p style='color:red;'>El " + numero + " no es correcto</p>";	//Escribe un mensaje de acierto en un div vacio
		window.alert("GAME OVER!!! \n Nº aciertos --> " + aciertos);		//sacamos por pantalla el mensaje final con el numero de aciertos
		aciertos = 0;
		
	}
	
	limpiar();
			
}


function limpiar() {
	
	document.getElementById("numero").value = "";	//limpiar la caja de texto cada vez qeu metemos un primo valido
	document.getElementById('numero').focus();	//Y pone el foco en la caja para mayor comodidad oh yeah
	
}
