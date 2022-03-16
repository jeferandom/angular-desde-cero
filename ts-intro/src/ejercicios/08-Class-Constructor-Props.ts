class Heroe {

  //@note 1) Primera forma de definir propiedades del constructor

  /* alterEgo: string;//alterEgo: string; Tiene nivel de acceso public por defecto
  public edad: number;
  public nombreReal: number;
  constructor(alterEgo: string, edad: number) {
    this.alterEgo = alterEgo;
    this.edad = edad;
  } */
  //@note 2) segunda forma de definir constructor
  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal?: string
    ) { }
}

const ironman = new Heroe('IronMan', 35,'Tony');

console.log(ironman)


