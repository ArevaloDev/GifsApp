import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GifsService } from './gifs.service';

describe('GifsService', () => {
  let service: GifsService;
  let httpMock:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GifsService]
    });
    service = TestBed.inject(GifsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deberia organizar el historial de tags correctamente',  () => {
        service.organizatedTag('hasbulla');
        service.organizatedTag('goku');
        service.organizatedTag('hasbulla');

        expect(service.tagsHistory.length).toBe(2);
        expect(service.tagsHistory).toEqual(['hasbulla', 'goku'])
  })
});
