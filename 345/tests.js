'use strict'

window.onload = probar


function probar()
{
	//Pruebas
	let funcion = window['aer_345']
	if (!funcion) throw 'No existe la función pedida.'

	//Test Básico
	let datosEntrada = '1\n4 1 3 8 2 5 6 7 9\n5 6 7 1 4 9 8 3 2\n2 8 9 7 3 6 1 4 5\n1 9 5 4 6 2 7 8 3\n7 2 6 9 8 3 5 1 4\n3 4 8 5 1 7 2 9 6\n8 5 1 6 9 4 3 2 7\n9 7 2 3 5 8 4 6 1\n6 3 4 2 7 1 9 5 8'
	let datosSalida = 'SI'
	if (funcion(datosEntrada) !== datosSalida)
		throw 'No se supera el test básico'

	datosEntrada = '1\n 2 3 4 6 5 7 8 9\n4 5 6 7 8 9 1 2 3\n7 8 9 1 2 3 4 5 6\n2 1 4 3 7 6 5 9 8\n3 6 7 9 5 8 2 1 4\n5 9 8 2 1 4 3 6 7\n6 3 1 5 9 7 8 4 2\n8 4 2 6 3 1 9 7 5\n9 7 5 8 4 2 6 3 2'
	datosSalida = 'NO'
	if (funcion(datosEntrada) !== datosSalida)
		throw 'No se supera el test 1'

	datosEntrada = '2\n 2 3 4 6 5 7 8 9\n4 5 6 7 8 9 1 2 3\n7 8 9 1 2 3 4 5 6\n2 1 4 3 7 6 5 9 8\n3 6 7 9 5 8 2 1 4\n5 9 8 2 1 4 3 6 7\n6 3 1 5 9 7 8 4 2\n8 4 2 6 3 1 9 7 5\n9 7 5 8 4 2 6 3 1\n5 1 3 8 2 5 6 7 9\n5 6 7 1 4 9 8 3 2\n2 8 9 7 3 6 1 4 5\n1 9 5 4 6 2 7 8 3\n7 2 6 9 8 3 5 1 4\n3 4 8 5 1 7 2 9 6\n8 5 1 6 9 4 3 2 7\n9 7 2 3 5 8 4 6 1\n6 3 4 2 7 1 9 5 8'
	datosSalida = 'SI NO'
	if (funcion(datosEntrada) !== datosSalida)
		throw 'No se supera el test 2'


	console.info('TESTS SUPERADOS')

}
