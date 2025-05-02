import { Component, computed, inject, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/shared/dragonball/character-list/character-list.component';
import type { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from '../../components/shared/dragonball/character-add/character-add.component';
import { DragonBalllService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super-page',
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonballSuperPageComponent {
  //constructor(public dragonballService: DragonBalllService) {}
public dragonballService = inject(DragonBalllService);

}
