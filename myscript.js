

function saludar() {
	var saludo = document.getElementById("mi_boton");
	//saludo.disabled = true;
	saludo.hidden = true;
	
	var resultado_saludo = document.getElementById("resultado_saludo");
	resultado_saludo.innerText = "Ya Salude!"
	resultado_saludo.style.background = '#00fff0';
	resultado_saludo.style.width = '75px'
}
