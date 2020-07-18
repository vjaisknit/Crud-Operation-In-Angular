import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http: HttpClient) { }

  saveEmplyee(EmployeeData) {
  return  this.http.post('https://localhost:44376/emp', EmployeeData);
  }

  UpdateEmplyee(EmployeeData) {
    return  this.http.put('https://localhost:44376/emp', EmployeeData);
  }

  GetAllEmplyee() {
    return this.http.get('https://localhost:44376/emp');
  }

  getEmpyeeById(empid) {
    return this.http.get('https://localhost:44376/emp/' + empid, );
  }

  deleteEmpyeeById(empid) {
    return this.http.delete('https://localhost:44376/emp/' + empid, );
  }


}
