import { AfterViewInit, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifsService } from '../../services/gifs.service';
import { ScrollStateService } from 'src/app/shared/services/scroll-state.service';

/*
const imageUrls: string[] = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
];
*/
@Component({
  selector: 'app-trending-page',
  imports: [],
  templateUrl: './trending-page.component.html',
  styleUrl: './trending-page.component.css'
})
export default class TrendingPageComponent implements AfterViewInit {
  //gifs= signal(imageUrls);
  gifService = inject(GifsService);
  scrollStateService = inject(ScrollStateService)

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  ngAfterViewInit(): void {
      const scrollDiv = this.scrollDivRef()?.nativeElement;
      if (!scrollDiv) return;
      scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();
  }

  onScroll(event : Event) {
    //console.log('Scroll event:', event);
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    //console.log(scrollDiv);
    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const scrollHeight = scrollDiv.scrollHeight;
    const clientHeight = scrollDiv.clientHeight;

    const isAtBottom = scrollTop + clientHeight +300>= scrollHeight; // 300px tolerance
    this.scrollStateService.trendingScrollState.set(scrollTop);
    //console.log({isAtBottom, scrollTop, clientHeight, scrollHeight});
    if (isAtBottom) {
      //console.log('Reached the bottom of the scroll div');
      this.gifService.loadTrendingGifs();
    }
  }

}
