import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

import { Character } from '../interfaces/character.interface';

/*
El decorador "injectable" le avisa a Angular que esta clase es un servicio.
Cuando Angular compile o se levante la app en modo desarrollo, detecta que esta clase es un injectable

  - "provideIn: Es una instrucción que hace que el servicio sea un singleton en TODA la app
    (siempre y cuando se haga como inyección de dependencias)

  - Sin el "provideIn", se debería definir el servico en la parte de "providers" en el app.module.ts
*/
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}