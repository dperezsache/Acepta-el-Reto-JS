'use strict'


window.onload = probar

function probar(){
	//Pruebas
	let funcion = window['aer_151']
	if (!funcion) throw 'No existe la función pedida.'

	//Test Básico
	let datosEntrada, datosSalida
	datosEntrada = '3\n1 0 0\n0 1 0\n0 0 1\n2\n0 1\n1 0\n5\n1 0 0 0 0\n0 5 0 0 0\n0 0 1 0 0\n0 0 0 1 0\n0 0 0 0 1\n0'
	datosSalida = 'SI\nNO\nNO'
	if (funcion(datosEntrada) !== datosSalida)
		throw 'No se supera el test básico'
	
	//Test 1
	datosEntrada = '1\n1\n1\n0\n0'
	datosSalida = 'SI\nNO'
	if (funcion(datosEntrada) !== datosSalida)
		throw 'No se supera el test 1'
	
	console.info('TESTS SUPERADOS')
}
