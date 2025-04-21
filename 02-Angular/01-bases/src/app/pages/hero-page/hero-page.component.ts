import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  // selector: 'app-hero-page',
   imports: [UpperCasePipe],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {
  nameSignal = signal('Iroman');
  ageSignal = signal(45);

  heroDescriptionSignal = computed(() => {
    return `${this.nameSignal()} - ${this.ageSignal()}`;
  });

  nameSignalUpperCase = computed(() => this.nameSignal().toUpperCase());

  getHeroDescription() {
    return `${this.nameSignal()} - ${this.ageSignal()}`;
  }

  changeHero() {
    this.nameSignal.set('Spiderman');
    this.ageSignal.set(22);
  }

  resetForm() {
    this.nameSignal.set('Iroman');
    this.ageSignal.set(45);
  }

  /**
   * Updates the age signal by adding the specified value to the current age.
   * @param value The number to add to the current age.
   */

  updateAge(value: number) {
    this.ageSignal.update((current) => current + value);
  }

  /**
   * Updates the name signal with the current value uppercased.
   */
  updateNameCapitalize() {
    this.nameSignal.update((current) => current.toUpperCase());
  }

}
