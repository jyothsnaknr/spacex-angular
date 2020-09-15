import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';

describe('AppService', () => {
    let service: AppService;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule], 
          providers: [AppService]
      });
      service = TestBed.inject(AppService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });
});

  // describe('AppService', () => {
  //   let service: AppService;
  //   beforeEach(() => { service = new AppService(); });
  
  //   it('#getValue should return real value', () => {
  //     expect(service.getValue()).toBe('real value');
  //   });
  
  //   it('#getObservableValue should return value from observable',
  //     (done: DoneFn) => {
  //     service.getObservableValue().subscribe(value => {
  //       expect(value).toBe('observable value');
  //       done();
  //     });
  //   });
  
  //   it('#getPromiseValue should return value from a promise',
  //     (done: DoneFn) => {
  //     service.getPromiseValue().then(value => {
  //       expect(value).toBe('promise value');
  //       done();
  //     });
  //   });
  // });
