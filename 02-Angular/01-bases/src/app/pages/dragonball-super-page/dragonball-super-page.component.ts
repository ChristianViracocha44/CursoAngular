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

  addCharacter( newCharacter: Character) {
    // Validar que el nombre y el poder no sean vacíos o nulos
    this.charecters.update((list) => [...list, newCharacter]);

  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
