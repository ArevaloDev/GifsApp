import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GifsService } from '../../services/gifs.service';
import { SearchgifsComponent } from '../../gifs/searchgifs/searchgifs.component';
import { CardlistComponent } from '../../gifs/cardlist/cardlist.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, SearchgifsComponent, CardlistComponent],
      imports:[HttpClientTestingModule],
      providers:[GifsService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
