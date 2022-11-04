// David Pérez Saché
'use strict'

function aer_119(datosEntrada)
{
	datosEntrada = datosEntrada.split('\n');
	let salida = '';

	for(let i=0; i<datosEntrada.length; i++)
	{
		datosEntrada[i] = parseInt(datosEntrada[i]);
	}

	for(let i=0; i<datosEntrada.length; i++)
	{
		let ejercito = datosEntrada[i];
		let resultado = 0;

		if (ejercito == 0)
		{
			break;
		}

		while(ejercito > 0)	
		{
			let aux = parseInt(Math.sqrt(ejercito));
			resultado += (aux * aux) + (4 * aux);
			ejercito -= aux * aux;
		}

		salida += resultado + '\n';
	}
	return salida.substring(0, salida.length-1);
}