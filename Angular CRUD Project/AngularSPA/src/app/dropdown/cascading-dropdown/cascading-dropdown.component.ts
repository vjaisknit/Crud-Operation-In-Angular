import { Component, OnInit } from '@angular/core';
import { CcDropdownService } from '../cc-dropdown.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cascading-dropdown',
  templateUrl: './cascading-dropdown.component.html',
  styleUrls: ['./cascading-dropdown.component.scss']
})
export class CascadingDropdownComponent implements OnInit {

  countryList;
  stateList;

  dropDownForm: FormGroup;
  constructor(private dropdownService: CcDropdownService, private fb: FormBuilder) { }

  ngOnInit() {

    this.dropDownForm = this.fb.group({
      country: ['0'],
      state: ['0']
    });

    this.dropdownService.getAllCountry().subscribe(coutryList => {
      this.countryList = coutryList;
    });
  }

  Save() {
    console.log(this.dropDownForm.value);
  }

  GetSateById(event) {

    this.dropdownService.getStateByCountry(Number(event.target.value)).subscribe(stateList => {
      this.stateList = stateList;
    });
  }

}
