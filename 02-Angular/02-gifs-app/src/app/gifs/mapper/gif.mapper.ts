import { Gif } from "../interfaces/gif.interface";
import { GiphyItem } from "../interfaces/giphy.interfaces";


export class GifMapper {

  /**
   * Maps a GiphyItem to a Gif.
   * @param item a GiphyItem.
   * @returns a Gif.
   */
  static mapGiphyItemToGif(item: GiphyItem): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
    };
  }

  /**
   * Maps an array of GiphyItems to an array of Gifs.
   * @param items an array of GiphyItems.
   * @returns an array of Gifs.
   */
  static mapGiphyItemsToGifArray(items: GiphyItem[]): Gif[] {
    return items.map(this.mapGiphyItemToGif);
  }


}
