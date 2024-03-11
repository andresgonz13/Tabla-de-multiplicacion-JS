
for (let i = 1; i <= 10; i++) { // Iterar sobre los números del 1 al 10
  let row = document.createElement('tr'); // Crear una fila para cada número
  
  // Crear una celda para el número
  let multiplierCell = document.createElement('td');
  multiplierCell.textContent = i;
  row.appendChild(multiplierCell);
  
  // Iterar sobre los números del 1 al 10 para cada fila
  for (let j = 1; j <= 10; j++) {
	  
    // Multiplicar el número de fila por el número de columna
    let result = i * j;
	
    // Crear una celda para el resultado
    let resultCell = document.createElement('td');
    resultCell.textContent = result;
    row.appendChild(resultCell);
  }
  
  // Agregar la fila a la tabla
  document.querySelector('table').appendChild(row);
}