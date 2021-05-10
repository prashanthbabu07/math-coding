let randomNumber = document.querySelector("#randomNumber");
let constValue = document.querySelector("#constantValue");
let resultsTable = document.querySelector("#results");
let initialValue = document.querySelector("#initialValue")


function addRow(randomValue, output, error) {
	let row = document.createElement("tr");
	let cols = `<td>${randomValue}</td>
			<td>${output}</td>
			<td>${error}</td>`;
	row.innerHTML = cols;
	resultsTable.appendChild(row)
}

/**
 * 
 * @param {number} c 
 * @returns 
 */
const miles = (c, kms) => kms * c;

let kms = 100;
let truth = 62.137;
let c = 0.5;
let incrementer = 0.1;
previous_error = undefined;
for (; ;) {
	let calculated = miles(c, kms).toFixed(5);
	let error = (truth - calculated).toFixed(5);

	addRow(c, calculated, error);

	if (previous_error == undefined) {
		previous_error = error;
		c = c + incrementer;
		continue;
	}

	if (Math.abs(error) == 0.00) {
		break;
	}
	else if (Math.abs(error) < Math.abs(previous_error)) {
		c = c + incrementer * Math.sign(error);
		previous_error = error;
	} else {
		c = c - incrementer * Math.sign(previous_error);
		incrementer = incrementer / 10;
		c = c + incrementer * Math.sign(previous_error);
		previous_error = error;
	}
	// c = c.toFixed(3);
}
