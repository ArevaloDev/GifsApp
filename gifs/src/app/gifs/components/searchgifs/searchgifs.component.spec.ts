import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchgifsComponent } from './searchgifs.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GifsService } from '../../services/gifs.service';

describe('SearchgifsComponent', () => {
  let component: SearchgifsComponent;
  let fixture: ComponentFixture<SearchgifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchgifsComponent],
      imports:[HttpClientTestingModule],
      providers:[GifsService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchgifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
