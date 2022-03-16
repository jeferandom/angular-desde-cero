

function sumar(a: number, b: number): number {
  return a + b;
}

function multiplicar(numero: number, otronumero?: number, base: number = 2) {
  return numero * base;
}

const sumarFlecha = (a: number, b: number): number => {
  return a + b
}

const resultado = sumar(1, 2);
console.log('resultado', resultado)

/* 
const res = multiplicar(5, 10)
console.log('res', res) */

interface PersonajeLOR {
  nombre: string;
  pv: number;
  mostrarHp: () => void;
}


function curar(personaje: PersonajeLOR, curarx: number): void {
  personaje.pv += curarx;
  console.log(personaje)
}


const nuevoPersonaje: PersonajeLOR = {
  nombre: 'Jef',
  pv: 50,
  mostrarHp() {
      console.log('puntos de vida', this.pv)
  }
}

curar(nuevoPersonaje, 20)