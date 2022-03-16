
interface Pasajero {
  nombre: string;
  hijos?: string[]
}
const pasajero1: Pasajero = {
nombre: 'Aleja',
}


const pasajero2: Pasajero = {
nombre: 'Jz',
hijos: ['Marcela','Sahian']
}

function imprimeHijos(pasajero:Pasajero):void{

const cuantosHijos = pasajero.hijos?.length || 0;
console.log('cuantosHijos', cuantosHijos)

}

imprimeHijos(pasajero1);