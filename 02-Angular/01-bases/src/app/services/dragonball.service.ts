import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DragonBalllService {
  constructor() {}

  charecters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);
  addCharacter(newCharacter: Character) {
    // Validar que el nombre y el poder no sean vacíos o nulos
    this.charecters.update((list) => [...list, newCharacter]);
  }
}
