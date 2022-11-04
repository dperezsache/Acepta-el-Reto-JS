// David Pérez Saché
'use strict'

fetch('datos_entrada.txt').
	then(respuesta => respuesta.text()).
	then(procesar)
	
function procesar(datosEntrada)
{
	let datos = [];
	let casos = null;
	
	datos = datosEntrada.split('\r\n');
	casos = parseInt(datos[0]);
	
	console.log(datos);
	console.log(casos);
	
	for (let i=1; i<=casos; i++)
	{
		let palabra = datos[i].toLowerCase();;
		let A = false;
		let E = false;
		let I = false;
		let O = false;
		let U = false;
		
		for (let j=0; j<palabra.length; j++)
		{
			switch(palabra.charAt(j))
			{
				case 'a':
					A = true;
					break;
					
				case 'e':
					E = true;
					break;
					
				case 'i':
					I = true;
					break;
					
				case 'o':
					O = true;
					break;
					
				case 'u':
					U = true;
					break;
			}
		}
		
		if (A && E && I && O && U) 
		{
			console.log('SI');
		}
		else
		{
			console.log('NO');
		}
	}
}