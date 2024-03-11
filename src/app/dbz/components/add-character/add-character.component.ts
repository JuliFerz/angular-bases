import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  // Se crea una instancia de emisor de eventos:
  @Output() // Si no se pasa parametro (string), el nombre de este output es de la propiedad ("onNewCharacter")
  public onNewCharacter: EventEmitter<Character> = new EventEmitter(); // Se especifíca que va a emitir un Character

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {
    console.log(this.character);
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 };
  }
}
