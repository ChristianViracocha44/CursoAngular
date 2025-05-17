import type { GiphyResponse } from './../interfaces/giphy.interfaces';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private http = inject(HttpClient);
  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: '20',
      },
    }).subscribe((resp) =>
    {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      console.log(gifs);
    }
    );
  }
}
