// David Pérez Saché
'use strict'

function aer_148(datos)
{
	// Crear variables
	let horas = [];
	let minutos = [];
	let resultado = '';
	let i;

	datos = datos.split('\n');
	
	// Separar horas de minutos, cada uno en su Array
	for(i=0; i<datos.length; i++)
	{
		let dato = datos[i].split(':');
		horas[i] = parseInt(dato[0]);
		minutos[i] = parseInt(dato[1]);
	}

	i = 0;

	// Generar resultado
	while(true)
	{
		if (minutos[i]==0 && horas[i]==0) break;
		let calculo = 60-minutos[i] + 60 * (23-horas[i]);
		resultado += calculo + '\n';
		i++;
	}

	// Enviar resultado
	resultado = resultado.substring(0, resultado.length-1);
	return resultado;
}