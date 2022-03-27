import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExpenseListComponent} from "./expense-list/expense-list.component";
import {ExpenseDetailsComponent} from "./expense-details/expense-details.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'expenses', component: ExpenseListComponent},
  {path: 'expenses/:id', component: ExpenseDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
