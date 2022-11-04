'use strict'

window.onload = probar

function probar(){
	//Pruebas
	let funcion = window['aer_148']
	if (!funcion) throw 'No existe la función pedida.'

	//Test Básico
	let datosEntrada, datosSalida
	datosEntrada = '23:45\n21:30\n00:01\n00:00'
	datosSalida = '15\n150\n1439'
	if (funcion(datosEntrada) !== datosSalida)
		throw 'No se supera el test básico'

	//Test 1
	datosEntrada = '01:01\n00:02\n01:00\n00:00'
	datosSalida = '1379\n1438\n1380'
	if (funcion(datosEntrada) !== datosSalida)
		throw 'No se supera el test 1'
	console.info('TESTS SUPERADOS')
}
