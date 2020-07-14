import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>('https://raw.githubusercontent.com/spreadzp/tasks-for-arrays/master/products.json');
  }

  getProductById(id: string): Observable<Product | null> {
    return this.getProducts()
      .pipe(map(products => {
        const filtered = products.filter(x => x.id === id);

        if (filtered.length > 0) {
          return filtered[0];
        }

        return null;
      }));
  }
}
