// David Pérez Saché
'use strict'

fetch('datos_entrada.txt').
	then(respuesta => respuesta.text()).
	then(procesar)
	
function procesar(datosEntrada)
{
	let filas = null;
	let valores = null;
	let datos = [];
	let compartimentos = [];
	let capMayor = [];
	let diferencia = [];
	let litros = null;
	
	datos = datosEntrada.split('\r\n');
	filas = parseInt(datos[0]);
	
	for(let i=0; i<filas; i++)
	{
		valores = datos[i+1].split(' ');
		compartimentos[i] = parseInt(valores[0]);
		capMayor[i] = parseInt(valores[1]);
		diferencia[i] = parseInt(valores[2]);
	}
	
	console.table(compartimentos);
	console.table(capMayor);
	console.table(diferencia);
	
	for(let i=0; i<filas; i++)
	{
		litros = capMayor[i];
		capMayor[i] -= diferencia[i];
		
		for(let j=0; j<compartimentos[i]-1; j++)
		{
			litros += capMayor[i];
			capMayor[i] -= diferencia[i];
		}
		console.log(litros);
	}
}