/*** Función para el Scroll del menu ***/

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});





$("#entrar").click(function(){


	 var usuario = $('#login-form-username').val();
     var contrasena = $('#login-form-password').val();
     
     
      if ( (usuario === "") || (contrasena === "") || (valido === false)){
     
      		$('.ocultar').css("display","block");
      		event.preventDefault(); 
     }


});


$("#registrar").click(function(){

	var nombre = $('#register-form-name').val();
	var usuario = $('#register-form-name').val();
    var contrasena = $('#register-form-password').val();
    var correo = $('#register-form-email').val();
    var tel = $('#register-form-phone').val();
    var repetir = $('register-form-repassword').val();
	var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    var valido = regex.test($('#register-form-email').val().trim());

       if ( (usuario === "") || (tel === "") || (contrasena === "") 
       	     || (correo === "") || (repetir ==="") || (nombre === "")){
     
      		$('.ocultar').css("display","block");
      		event.preventDefault(); 
     }

    	if((valido === false) && !(usuario === "") && !(tel === "") && !(contrasena === "") 
       	    && !(correo === "") && !(repetir ==="") && !(nombre === "")){

           		$( ".mensaje-mail" ).html( "Por favor introducir un formato de correo válido Ejm: nombre@sitio.com" );
           		$('.ocultar').css("display","none");
           		event.preventDefault(); 		

           			}


        if(!(usuario === "") && !(tel === "") && !(contrasena === "") 
       	    && !(correo === "") && !(repetir ==="") && !(nombre === "") && (valido === true)){

        	alert("Registro Exitoso");
        }   			

    });

$("#cerrar").click(function(){
	$('.ocultar').css("display","none");
	event.preventDefault(); 
});




