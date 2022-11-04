// David Pérez Saché
'use strict'

function aer_X1(datosEntrada)
{
	datosEntrada = datosEntrada.split('\n');
	let	salida = '';

	for(let i=0; i<datosEntrada.length; i++)
	{
		if(datosEntrada.length>1 && datosEntrada[i].charAt(datosEntrada[i].length-1) != '.')
			datosEntrada[i] += '.';
		
		salida += revertirPalabras(datosEntrada[i]) + '\n';
	}

	return salida.substring(0, salida.length-1);;
}

function revertirPalabras(string)
{
	return string.replace(/[A-zÀ-ú]+/gi, function(s) {
		return s.split('').reverse().join('')
	});
}