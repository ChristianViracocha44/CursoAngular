import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
};


@Injectable({ providedIn: 'root' })
export class DragonBalllService {
  constructor() {}

  charecters= signal<Character[]>(loadFromLocalStorage());

  //charecters = signal<Character[]>([
  //  { id: 1, name: 'Goku', power: 9001 },
  //  { id: 2, name: 'Vegeta', power: 8000 },
  //]);

saveToLocalStorage = effect(() => {
    //console.log(`Guardando en localStorage ${this.charecters().length}`);
    localStorage.setItem('characters', JSON.stringify(this.charecters()));
  });

  addCharacter(newCharacter: Character) {
    // Validar que el nombre y el poder no sean vacíos o nulos
    this.charecters.update((list) => [...list, newCharacter]);
  }
}
