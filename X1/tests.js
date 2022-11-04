'use strict'


window.onload = probar

function probar(){
	//Pruebas
	let funcion = window['aer_X1']
	if (!funcion) throw 'No existe la función pedida.'
	
	//Test Básico
	let datosEntrada = 'No consigo entenderlo'
	let datosSalida = 'oN ogisnoc olrednetne'
	if (funcion(datosEntrada) !== datosSalida)
		throw 'No se supera el test básico'
	
	datosEntrada = 'No consigo entenderlo\nEs muy difícil. Me rindo.'
	datosSalida = 'oN ogisnoc olrednetne.\nsE yum licífid. eM odnir.'
	if (funcion(datosEntrada) !== datosSalida)
		throw 'No se supera el test 1'
	
	console.info('TESTS SUPERADOS')
}