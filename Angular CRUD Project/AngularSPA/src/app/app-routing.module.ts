import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { CategoryComponent } from './category/category.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CascadingDropdownComponent } from './dropdown/cascading-dropdown/cascading-dropdown.component';


const routes: Routes = [
  {path: 'create-employee', component: EmployeeComponent},
  {path: 'create-category', component: CategoryComponent},
  {path: 'edit-category/:id', component: CategoryComponent},
  {path: 'category-list', component: CategoryListComponent},
  {path: 'dropdown', component: CascadingDropdownComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
