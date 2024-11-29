import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Data } from '../../interfaces/gifs.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  
  constructor(private gifServices:GifsService){}
  get gifs():Data[]{
    return this.gifServices.gifList;
  }
}
