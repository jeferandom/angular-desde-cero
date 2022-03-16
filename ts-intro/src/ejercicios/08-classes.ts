class PersonaNormal {

  constructor(
    public nombre: string,
    public direccion: string
  ) { }
}

class Heroew extends PersonaNormal {
  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
  ) {
    super(nombreReal,'New York, USA');
  }
}

const ironman2 = new Heroew('IronMan', 35, 'Tony');

console.log(ironman2)/* {
  "nombre": "Tony",
  "direccion": "New York, USA",
  "alterEgo": "IronMan",
  "edad": 35,
  "nombreReal": "Tony"
} */