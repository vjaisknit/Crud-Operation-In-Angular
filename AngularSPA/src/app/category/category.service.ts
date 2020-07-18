import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = 'https://localhost:44376/api/category/';
  constructor(private http: HttpClient) { }

  saveCategory(categoryData) {
  return  this.http.post(this.baseUrl + 'AddCategory', categoryData);
  }

  UpdateCategory(categoryData) {
    return  this.http.put(this.baseUrl + 'UpdataCategory', categoryData);
  }

  GetAllCategory() {
    return this.http.get(this.baseUrl + 'GetAllCategory');
  }

  getCategoryById(catid): any {
    return this.http.get(this.baseUrl + 'GetCategoryById/' + catid );
  }

  GetAllCategoryForDDL() {
    return this.http.get(this.baseUrl + 'GetAllCategoryForDDL' );
  }

  UpdateCategoryStatus(catid) {
    return this.http.get(this.baseUrl + 'UpdateStatus/' + catid );
  }

}
