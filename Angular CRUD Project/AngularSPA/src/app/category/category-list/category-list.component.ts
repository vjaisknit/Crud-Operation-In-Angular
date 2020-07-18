import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categoryList;
  constructor(private catservice: CategoryService) { }

  ngOnInit() {
    this.catservice.GetAllCategory().subscribe(catList => {
      console.log(catList);
      this.categoryList = catList;
    });
  }
  updateCatStatus(catid) {
    this.catservice.UpdateCategoryStatus(catid).subscribe( data => {
      console.log(data);
      this.catservice.GetAllCategory().subscribe(catList => {
        console.log(catList);
        this.categoryList = catList;
      });
    });
  }

}
