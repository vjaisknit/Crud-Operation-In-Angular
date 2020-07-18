import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  btnText = 'Save';
  desc = 'Create Category';
  category;
  catid;
  constructor(private catService: CategoryService, private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      if (param) {
        this.catid = +param.get('id');
        this.catService.getCategoryById(this.catid).subscribe(cat => {
          this.category = cat.catgory;
          this.btnText = 'Update';
          this.desc = 'Update Category';
        });
      }
      });
  }

  SubmitCategory() {
  const catData = {id: this.catid , catgory: this.category, isactive: 1, isdelete: 0 };
  if (this.catid && this.catid > 0) {
    this.catService.UpdateCategory(catData).subscribe(data => {
     alert('Category Updated Successfully !!');
     this.router.navigate(['category-list']);
    });
  } else {
    this.catService.saveCategory(catData).subscribe(data => {
      alert('Category Save Successfully !!');
      this.router.navigate(['category-list']);
    });
  }
  }

 

}
