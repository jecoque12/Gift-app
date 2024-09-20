import { Component, Input, input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  @Input()
  public gif!: Gif
  ngOnInit(): void {
    if (this.gif === undefined) {
      throw new Error("gif property is not define");
    }
  }


}
