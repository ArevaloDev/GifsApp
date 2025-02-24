import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardlistComponent } from './cardlist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GifsService } from '../../services/gifs.service';

describe('CardlistComponent', () => {
  let component: CardlistComponent;
  let fixture: ComponentFixture<CardlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardlistComponent],
      imports:[HttpClientTestingModule],
      providers:[GifsService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
