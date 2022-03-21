import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Koku',
      poder: 13000
    },
    {
      nombre: 'Krilin',
      poder: 13000
    },
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }
  
  constructor() {
    console.log('DbzService init')
  }

  agregarPersonaje(personaje: Personaje){
    this._personajes.push(personaje)
  }
}