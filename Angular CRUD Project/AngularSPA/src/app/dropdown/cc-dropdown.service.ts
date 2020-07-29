import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CcDropdownService {

  constructor(private http: HttpClient) { }

  getAllCountry() {
    return this.http.get('https://localhost:44376/api/CascadingDDL/GetAllCountry');
  }

  getStateByCountry(countryId: number) {
    return this.http.get('https://localhost:44376/api/CascadingDDL/GetStateById/' + countryId);
  }
}
