import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GifsService } from './services/gifs.service';
import { SearchgifsComponent } from './gifs/searchgifs/searchgifs.component';
import { CardlistComponent } from './gifs/cardlist/cardlist.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent, 
        SidebarComponent,
        HomeComponent,
        SearchgifsComponent,
        CardlistComponent

      ],
      providers:[GifsService]
    
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'gifs'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('gifs');
  });

  //it('should render title', () => {
  //  const fixture = TestBed.createComponent(AppComponent);
  //  fixture.detectChanges();
  //  const compiled = fixture.nativeElement as HTMLElement;
  //  expect(compiled.querySelector('h1')?.textContent).toContain('Hello, gifs');
  //});
});
