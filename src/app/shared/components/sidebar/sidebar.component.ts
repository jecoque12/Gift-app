import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { SearchResponse } from '../../../gifs/interfaces/gifs.interfaces';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {


  constructor(private gifsService: GifsService) {

  }

  get TagHistory(): string[] {
    return this.gifsService.tagsHistory;
  }

  research(tag: string) {
    this.gifsService.searchTag(tag);
  }
}
