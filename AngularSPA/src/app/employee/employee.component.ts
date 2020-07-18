import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmpService } from './emp.service';
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  employeeList;
  categoryList;
  empid;
  btnSave = 'Save';
  constructor(private fb: FormBuilder, private http: HttpClient,
              private empservice: EmpService, private catService: CategoryService) { }
  ngOnInit() {
    this.employeeForm = this.fb.group({
      name: [''],
      email: [''],
      password: ['']
    });
    this.GetEmplyeeData();
    this.catService.GetAllCategoryForDDL().subscribe(data => {
        this.categoryList = data;
    });
  }

  OnSubmit() {
    if (this.empid && this.empid > 0) {
      const empdataforupdate = { id: this.empid , name: this.employeeForm.controls.name.value,
                          email: this.employeeForm.controls.email.value,
                          password: this.employeeForm.controls.password.value };
      this.empservice.UpdateEmplyee(empdataforupdate).subscribe(data => {
        this.GetEmplyeeData();
        this.employeeForm.reset();
        this.btnSave = 'Save';
      });
    } else {
      this.empservice.saveEmplyee(this.employeeForm.value).subscribe( data => {
        this.GetEmplyeeData();
        this.employeeForm.reset();
      });
    }
  }

  GetEmplyeeData() {
    this.empservice.GetAllEmplyee().subscribe( data => {
      this.employeeList = data;
    });
  }

  edit(id) {
    // this.empservice.getEmpyeeById(id).subscribe(data => {
    //   this.empid = data.id;
    //   this.btnSave = 'Update';
    //   this.employeeForm.patchValue(data);
    // });
  }

  delete(id) {
    this.empservice.deleteEmpyeeById(id).subscribe(data => {
      this.GetEmplyeeData();
    });
  }
}
