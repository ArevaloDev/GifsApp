import { Component, Input } from '@angular/core';
import { Data, GifResponse } from '../../interfaces/gifs.interface';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrl: './cardlist.component.css'
})
export class CardlistComponent {

  @Input() public gifs:Data[] = [];

 
}
