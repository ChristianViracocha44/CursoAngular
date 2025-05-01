import { Component, output, signal } from '@angular/core';
import { Character } from '../../../../interfaces/character.interface';

@Component({
  selector: 'dragonBall-character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name = signal<string>('');
  power = signal<number>(0);

  newCharacter = output<Character>();

  /**
   * Add a new character to the list. If the name or power are not valid
   * (empty or null) or if the power is less than or equal to 0, it does
   * not add the character and does nothing.
   *
   * If the character is valid, it creates a new character, adds it to the
   * list and emits the new character through the newCharacter output.
   * Then it resets the name and power fields.
   */
  addCharacter() {
    // Validar que el nombre y el poder no sean vacíos o nulos
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };

    //this.charecters.update((list) => [...list, newCharacter]);
    //console.log({newCharacter});
    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
