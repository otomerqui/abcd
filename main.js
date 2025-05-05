
let resetButton = document.getElementById('reset');

function chooseLetter(array) {
	let randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}

resetButton.addEventListener('click', () => {
	const total = 25;
	const resultado = [];

	for (let i = 0; i < total; i++) {
		let opciones;

		// Reglas especiales por posición
		if (i === 3) {
			opciones = ['I', 'J']; // solo I o J
		} else if (i === 8) {
			opciones = ['D', 'J']; // solo D o J
		} else if (i === 9) {
			resultado[i] = 'J'; // fija
			continue;
		} else {
			opciones = ['I', 'D', 'J'];
		}

		// Evitar más de 3 iguales seguidas
		/*
		if (i >= 3 && resultado[i - 1] === resultado[i - 2] && resultado[i - 2] === resultado[i - 3]) {
			// Elimina la letra repetida de las opciones
			const letraRepetida = resultado[i - 1];
			opciones = opciones.filter(letra => letra !== letraRepetida);
		}*/
		// Evitar más de 2 iguales seguidas
		if (i >= 2 && resultado[i - 1] === resultado[i - 2]) {
			const letraRepetida = resultado[i - 1];
			opciones = opciones.filter(letra => letra !== letraRepetida);
		}
		


		// Elegir y asignar
		resultado[i] = chooseLetter(opciones);
	}

	// Asignar al DOM
	for (let i = 0; i < total; i++) {
		const el = document.getElementById(`action${i}`);
		if (el) el.innerHTML = resultado[i];
	}
});


