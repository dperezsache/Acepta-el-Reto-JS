// David Pérez Saché
'use strict'

function aer_345(datosEntrada)
{
	let valores = [];
	datosEntrada = datosEntrada.split('\n');

	for(let i=1; i<datosEntrada.length; i++)
	{
		valores.push(datosEntrada[i].split(' '));
	}

	for(let i=0; i<valores.length; i++)
	{
		for(let j=0; j<valores[i].length; j++)
			valores[i][j] = parseInt(valores[i][j]);
	}

	if(solucionarSudoku(valores))
	{
		return 'SI';
	}
	else
	{
		return 'NO';
	}
}

/**
 * Método para comprobar que todos los valores estén entre 0 y 9.
 * @param {Number} num Número a comprobar.
 * @returns {Boolean} true si el número es válido, false si no lo es.
 */
function numeroValido(num)
{
	if(num>0 && num<10) 
	{
		return true;
	}
	else 
	{
		return false;
	}
}

/**
 * Comparar los contenidos de ambos arrays.
 * @param {Array} arr1 Primer array.
 * @param {Array} arr2 Segundo array.
 * @returns {Boolean} true si son iguales, false si no lo son.
 */
function arrayIdentico(arr1, arr2)
{
	for(let i=0; i<arr1.length; i++)
	{
		if(arr1[i] !== arr2[i])
			return false;
	}
	return true;
}

/**
 * Método que genera el array pasado sin valores repetidos, y lo compara con el array original pasado.
 * @param {Array} array Array a comprobar.
 * @returns {Array} Devuelve el array pasado, si no tiene repetidos.
 */
function filaUnica(array)
{
	let tempArray = [...new Set(array)];

	if(arrayIdentico(array, tempArray)) 
	{
		return array;
	}
}

/**
 * Comprueba que cada fila sea válida.
 * @param {Array} fila Array con la fila de valores.
 * @returns {Boolean} true si es válida, false si no lo es.
 */
function filaValida(fila)
{
	let unica = filaUnica(fila);

	if(fila.every(numeroValido) && arrayIdentico(fila, unica)) 
	{
		return true;
	}
	else 
	{
		return false;
	}
}

/**
 * Comprueba cada fila del array.
 * @param {Array} array Array.
 * @returns {Boolean} true si todas las filas son válidas, false si no lo son.
 */
function checkFilas(array)
{
	if(array.every(filaValida)) 
	{
		return true;
	}
	else 
	{
		return false;
	}
}

function transponerArray(array)
{
	let tempArray = [];

	for(let i=0; i<array.length; i++)
	{
		tempArray.push([]);

		for(let j=0; j<array.length; j++)
			tempArray[i].push(array[j][i]);
	}

	return tempArray;
}

function comprobarRegiones(array)
{
	for(let i=0; i<9; i+=3)
	{
		for(let j=0; j<9; j+=3)
		{
			let region = [];
			for(let k=i; k<i+3; k++)
			{
				for(let l=j; l<j+3; l++)
					region.push(array[k][l]);
			}
			if(!filaValida(region))
			{
				return false;
			}
		}
	}
	return true;
}

function solucionarSudoku(array)
{
	let filas = checkFilas(array);
	let columnas = checkFilas(transponerArray(array));
	let regiones = comprobarRegiones(array);

	if(filas && columnas && regiones)
	{
		return true;
	}
	else
	{
		return false;
	}
}