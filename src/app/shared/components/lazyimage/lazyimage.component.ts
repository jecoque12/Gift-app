import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazyimage',
  templateUrl: './lazyimage.component.html',
  styleUrl: './lazyimage.component.css'
})
export class LazyimageComponent implements OnInit {
  ngOnInit(): void {
    if (!this.src) throw new Error('src property not implemented.');
  }

  @Input()
  public src: string = '';
  @Input()
  public alt: string = '';
  public hasLoaded: boolean = false;


  onLoad() {
    console.log("imagen cargada");
    this.hasLoaded = true;
  }
}
