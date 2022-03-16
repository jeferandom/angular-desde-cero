//let habilidades: (boolean | string | number)[] = ['Bash', 'Counter', 'Healing', 100];
let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
    obj?:any;
}

const personaje: Personaje = {
    nombre: 'Jef',
    hp: 100,
    obj:{ x:"1",y:2},
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal= 'cali';
console.table(personaje)