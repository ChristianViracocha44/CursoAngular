import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/shared/dragonball/character-list/character-list.component';
import type { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from "../../components/shared/dragonball/character-add/character-add.component";


@Component({
  selector: 'app-dragonball-super-page',
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonballSuperPageComponent {
  name = signal<string>('');
  power = signal<number>(0);

  charecters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);

  powerClasses = computed(() => {
    return { 'text-danger': true };
  });

  addCharacter() {
    // Validar que el nombre y el poder no sean vacíos o nulos
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.charecters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.charecters.update((list) => [...list, newCharacter]);

    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
