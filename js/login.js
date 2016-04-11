
function init() {

	//si existe el objeto
	if (document && document.getElementById) {

		//capturo el formulario
		var loginForm = document.getElementById('loginForm');
		//cuando submit se lanza la validacion
		loginForm.onsubmit = validateForm;
	} else {
		alert('El navegador no soporta el script');
	}

}

function validateForm() {
	'use strict';

	//capturo lo input del formulario
	var email = document.getElementById('email');
	var password = document.getElementById('password');

	//si los input no estan vacios
	if ((email.value.length > 0) && (password.value.length > 0)) {
		//devuelve true
		return true;

	} else {
		//sino devuelve false
		alert('Rellene el formulario');
		return false;
	}
	
	
}

window.onload = init; 