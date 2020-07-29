import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './header/header.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CascadingDropdownComponent } from './dropdown/cascading-dropdown/cascading-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CategoryComponent,
    HeaderComponent,
    CategoryListComponent,
    CascadingDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
