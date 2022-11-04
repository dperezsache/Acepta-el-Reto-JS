// David Pérez Saché
'use strict'

function aer_151(datosEntrada)
{
	datosEntrada = datosEntrada.split('\n');
	let indice = parseInt(datosEntrada[0])+1;
	let indiceAnterior = 0;
	let valores;
	let salida = '';

	do
	{
		valores = [];

		for(let i=indiceAnterior+1; i<indice; i++)
		{
			valores.push(datosEntrada[i].split(' '));
		}

		for (let i=0; i<valores.length; i++) 
		{
			for(let j=0; j<valores[i].length; j++)
				valores[i][j] = parseInt(valores[i][j]);
		}

		salida += comprobarIdentidad(valores);

		indiceAnterior = indice;
		indice = parseInt(datosEntrada[indice]) + indiceAnterior + 1;
		
	} while(datosEntrada.length != indice);
	
	return salida.substring(0, salida.length-1);
}

function comprobarIdentidad(matriz)
{
	for(let i=0; i<matriz.length; i++)
	{
		for(let j=0; j<matriz[i].length; j++)
		{
			if(i==j && matriz[i][j]!=1)
				return 'NO\n';
				
			if(i!=j && matriz[i][j]!=0)
				return 'NO\n';
		}
	}

	return 'SI\n';
}