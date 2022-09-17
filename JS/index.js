console.log("Conectado")

let elementos = document.getElementById("cont");
let formulario = document.getElementById("formulario")

elementos.addEventListener("click", (e)=>{
	e.preventDefault();

	let valor = document.getElementById("entrada").value;
	let expresion;

	if(e.target.id === "igual"){
		expresion = eval(valor);
		formulario.reset();
		let div = document.getElementById("entrada");
		div.value = expresion;
	}else if(e.target.id === "borrar"){
		formulario.reset();
	}


})