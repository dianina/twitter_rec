/*
Textarea funcionalidad
*/

var textarea = document.getElementById('textarea');
var span = document.getElementById('span');
var btnlittle = document.getElementById('btn');

/*
Contador en reversa
*/
textarea.onkeydown = function() {
/*
Guardo el valor (texto usuario) del textArea
*/
var comment = document.getElementById('textarea').value;
/*
Definir longitud del mensaje
*/
var long = comment.length;

/*
Defino límite de caracteres
*/
var limit = 140;
/* Límite max para contador
*/
var countdown = limit - (long + 1);
/*
Obteniendo....
*/
var counter = document.getElementById('counter-characters');
  counter.innerHTML = countdown;

    if (countdown <= 50) {

        counter.className = "yellow";

  }

    if (countdown <= 20) {

        counter.className = "orange";

   }

    if (countdown <= 0) {

        counter.className = "red";
        btnlittle.setAttribute("disabled", "disabled");
        return null
   }

    if (countdown === 0 || countdown === null || countdown === 140) {

        btnlittle.setAttribute("disabled", "disabled");

  } else {

        btnlittle.removeAttribute("disabled");

  }
}

/*
Textarea con tamaño flexible según texto
*/
var btnlittle = document.getElementById('btn');
var textarea = document.getElementById("textarea");
var limit = 200;

textarea.oninput = function() {
  textarea.style.height = "";
/*
1. Textarea con tamaño flexible según texto.
2. Recortar valor (límite), con fn Math.min.
3. Eliminando scroll
*/
  textarea.style.height = Math.min(textarea.scrollHeight, 300) + "px";
    
}

/*
Cambio de color del boton Tweet al posicionarse 
en textarea y al llegar a 0.
*/
var btnlittle = document.getElementById('btn');
var textarea = document.getElementById("textarea");

textarea.addEventListener("focus", function() {
  if (textarea.length < 0 || textarea.value == "") {
    btnlittle.setAttribute("disabled", "disabled");
  } else {
    btnlittle.removeAttribute("disabled");
  }
})

/*
Ahora... evento botón para agregar comentario
*/

var btnlittle = document.getElementById('btn');

btnlittle.addEventListener('click', function() {

/*
Reset del contador
*/
var counter = document.getElementById('counter-characters');
	counter.innerHTML = 140;    
    counter.className = "black";

    var textarea = document.getElementById('textarea').value;
/* 
Con "value" se toma el valor (texto) del id comment
*/

/*
Ahora, reset del textarea
*/
  document.getElementById('textarea').value = '';

/*
Contenido en "cont" ubicado en html
*/
    var cont = document.getElementById('cont');

/*
Creando div contenedor de cada comentario
*/
var newComments = document.createElement('div');

/*
Asegurar que textarea tenga un mensaje "ALERT"
*/
  if (textarea.length == 0 || textarea == null) {
  alert('Deben ingresar un mensaje');
    botoncito.setAttribute("disabled", "disabled");
      return false;
  }


/* 
Ahora, los nodos de texto de textarea creado
*/

  var textNewComment = document.createTextNode(textarea);

  var contenedorElemento = document.createElement('p');

  contenedorElemento.appendChild(textNewComment);

  newComments.appendChild(contenedorElemento);

  cont.appendChild(newComments);


})