import { Injectable, inject } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Category } from '../types/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiAdminUrl = 'https://hoadv-nodejs.vercel.app/categories'; 
  http = inject(HttpClient); 
  constructor() {}

  getCategoryListAdmin(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiAdminUrl); 
}
