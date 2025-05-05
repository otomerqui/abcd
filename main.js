
/*
let resetButton = document.getElementById('reset');


const letters = ['I','D','J'];
//generate a number between 0 and 2


// function to select an action from gameActions array
function chooseLetter() {
 let randomNumber = Math.floor(Math.random()*3);

  return letters[randomNumber];
}

resetButton.addEventListener('click', () => {
	
	// Display the result
	document.getElementById('action').innerHTML = chooseLetter();
	document.getElementById('action1').innerHTML = chooseLetter();
	document.getElementById('action2').innerHTML = chooseLetter();
	document.getElementById('action3').innerHTML = chooseLetter();
	document.getElementById('action4').innerHTML = chooseLetter();
	document.getElementById('action5').innerHTML = chooseLetter();
	document.getElementById('action6').innerHTML = chooseLetter();
	document.getElementById('action7').innerHTML = chooseLetter();
	document.getElementById('action8').innerHTML = chooseLetter();
	document.getElementById('action9').innerHTML = chooseLetter();
	document.getElementById('action10').innerHTML = chooseLetter();
	document.getElementById('action11').innerHTML = chooseLetter();
	document.getElementById('action12').innerHTML = chooseLetter();
	document.getElementById('action13').innerHTML = chooseLetter();
	document.getElementById('action14').innerHTML = chooseLetter();
	document.getElementById('action15').innerHTML = chooseLetter();
	document.getElementById('action16').innerHTML = chooseLetter();
	document.getElementById('action17').innerHTML = chooseLetter();
	document.getElementById('action18').innerHTML = chooseLetter();
	document.getElementById('action19').innerHTML = chooseLetter();
	document.getElementById('action20').innerHTML = chooseLetter();
	document.getElementById('action21').innerHTML = chooseLetter();
	document.getElementById('action22').innerHTML = chooseLetter();
	document.getElementById('action23').innerHTML = chooseLetter();
	document.getElementById('action24').innerHTML = chooseLetter();
});

let resetButton = document.getElementById('reset');

const letters = ['I', 'D', 'J'];
const actionIds = Array.from({ length: 25 }, (_, i) => `action${i}`);

// Función para elegir una letra sin permitir más de dos repetidas seguidas
function generateSequence(limit) {
	let result = [];

	for (let i = 0; i < limit; i++) {
		let letter;
		let attempts = 0;

		do {
			letter = letters[Math.floor(Math.random() * letters.length)];
			attempts++;
		} while (
			i >= 2 &&
			result[i - 1] === letter &&
			result[i - 2] === letter &&
			attempts < 10 // evitar loop infinito
		);

		result.push(letter);
	}
	return result;
}

resetButton.addEventListener('click', () => {
	const newLetters = generateSequence(25);
	actionIds.forEach((id, index) => {
		document.getElementById(id).innerHTML = newLetters[index];
	});
});


let resetButton = document.getElementById('reset');




// function to select an action from gameActions array
function chooseLetter(array) {
 let randomNumber = Math.floor(Math.random()*3);

  return array[randomNumber];
}

// function to select an action from gameActions array
function chooseLetter2(array) {
	let randomNumber = Math.floor(Math.random()*2);
   
	 return array[randomNumber];
}

resetButton.addEventListener('click', () => {
	
	// Display the result
	document.getElementById('action0').innerHTML = chooseLetter(['I','D','J']);
	document.getElementById('action1').innerHTML = chooseLetter(['I','D','J']);
	document.getElementById('action2').innerHTML = chooseLetter(['I','D','J']);
	document.getElementById('action3').innerHTML = chooseLetter2(['I','J']);
	document.getElementById('action4').innerHTML = chooseLetter(['I','D','J']);
	document.getElementById('action5').innerHTML = chooseLetter(['I','D','J']);
	document.getElementById('action6').innerHTML = chooseLetter(['I','D','J']);
	document.getElementById('action7').innerHTML = chooseLetter(['I','D','J']);
	document.getElementById('action8').innerHTML = chooseLetter2(['D','J']);
	document.getElementById('action9').innerHTML = 'J';
	document.getElementById('action10').innerHTML = chooseLetter(['I','D','J']);
	document.getElementById('action11').innerHTML = chooseLetter(['I','D','J']);
	document.getElementById('action12').innerHTML = chooseLetter(['I','D','J']);
	document.getElementById('action13').innerHTML = chooseLetter(['I','D','J']);
	document.getElementById('action14').innerHTML = chooseLetter(['I','D','J']);
	document.getElementById('action15').innerHTML = chooseLetter(['I','D','J']);
	document.getElementById('action16').innerHTML = chooseLetter(['I','D','J']);
	document.getElementById('action17').innerHTML = chooseLetter(['I','D','J']);
	document.getElementById('action18').innerHTML = chooseLetter(['I','D','J']);
	document.getElementById('action19').innerHTML = chooseLetter(['I','D','J']);
	document.getElementById('action20').innerHTML = chooseLetter(['I','D','J']);
	document.getElementById('action21').innerHTML = chooseLetter(['I','D','J']);
	document.getElementById('action22').innerHTML = chooseLetter(['I','D','J']);
	document.getElementById('action23').innerHTML = chooseLetter(['I','D','J']);
	document.getElementById('action24').innerHTML = chooseLetter(['I','D','J']);
});


*/
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


