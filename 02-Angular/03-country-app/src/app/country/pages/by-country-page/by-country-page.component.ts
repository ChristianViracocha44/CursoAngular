import { Component, inject, resource, signal } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { firstValueFrom } from 'rxjs';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css',
})
export class ByCountryPageComponent {
  countryService = inject(CountryService);
  searchPlaceholder = 'Buscar por capital';
  //========================================================
  // Proceso estandar
  /*

  isLoading = signal(false);
  isError = signal<string|null>(null) ;
  countries = signal<Country[]>([]);

  onSearch(query: string) {
    if(this.isLoading()) return;

    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCapital(query).subscribe({
      next: (countries) => {
      this.isLoading.set(false);
      this.countries.set(countries);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.countries.set([]);
        this.isError.set(`No se encontro un pais con esa capital: ${query}`);
      },

    });
  }

  */
  //========================================================
  //========================================================

  //========================================================
  // Proceso nuevo

  query = signal('');

  countryResource = resource({
    request: () => ({ query: this.query() }),
    loader: async ({ request }) => {
      if (!request.query) return [];

      return await firstValueFrom(
        this.countryService.searchByCountry(request.query)
      );
    },
  });

  //========================================================
  //========================================================
}
