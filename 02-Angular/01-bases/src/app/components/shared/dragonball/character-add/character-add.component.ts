import { Component, signal } from '@angular/core';
import { Character } from '../../../../interfaces/character.interface';

@Component({
  selector: 'dragonBall-character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name = signal<string>('');
  power = signal<number>(0);
  addCharacter() {
    // Validar que el nombre y el poder no sean vacíos o nulos
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      //id: this.charecters().length + 1,
      id:1000,
      name: this.name(),
      power: this.power(),
    };

    //this.charecters.update((list) => [...list, newCharacter]);
    console.log({newCharacter});
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
