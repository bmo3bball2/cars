import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
//  baseUrl = 'http://localhost/api';
  baseUrl = 'http://ec2-34-200-226-33.compute-1.amazonaws.com/api';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.baseUrl}/list.php`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }

  store(car: Car) {
    return this.http.post(`${this.baseUrl}/store.php`,  { data: car }).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }

  update(car: Car) {
    return this.http.put(`${this.baseUrl}/update.php`, { data: car });
  }

  delete(id: any) {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/delete.php`, { params: params });
  }
  
}
