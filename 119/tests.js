'use strict'


window.onload = probar

function probar(){
	//Pruebas
	let funcion = window['aer_119']
	if (!funcion) throw 'No existe la función pedida.'

	//Test Básico
	let datosEntrada, datosSalida
	datosEntrada = '35\n20\n10\n0'
	datosSalida = '71\n44\n26'
	if (funcion(datosEntrada) !== datosSalida)
		throw 'No se supera el test básico'
	
	//Test 1
	datosEntrada = '12345\n1\n0'
	datosSalida = '12821\n5'
	if (funcion(datosEntrada) !== datosSalida)
		throw 'No se supera el test 1'
	
	//Test 2
	datosEntrada = '0'
	datosSalida = ''
	if (funcion(datosEntrada) !== datosSalida)
		throw 'No se supera el test 2'

	console.info('TESTS SUPERADOS')
}
