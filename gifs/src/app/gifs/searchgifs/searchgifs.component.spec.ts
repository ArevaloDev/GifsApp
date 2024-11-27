import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchgifsComponent } from './searchgifs.component';

describe('SearchgifsComponent', () => {
  let component: SearchgifsComponent;
  let fixture: ComponentFixture<SearchgifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchgifsComponent]
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
