import { Component, ElementRef, ViewChild,} from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-searchgifs',
  templateUrl: './searchgifs.component.html',
  styleUrl: './searchgifs.component.css'
})
export class SearchgifsComponent {
  @ViewChild('txtInput') txtValue!:ElementRef<HTMLInputElement>;
  constructor(private gifService:GifsService){}

  searchGif = () => {
    const valueInput = this.txtValue.nativeElement.value;
    this.gifService.searchGif(valueInput);
    this.txtValue.nativeElement.value = '';
    
  }
}
