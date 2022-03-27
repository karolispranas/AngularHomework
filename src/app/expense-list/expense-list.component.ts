import { Component, OnInit } from '@angular/core';
import {Expense} from "../interface/expense";
import {BudgetServiceService} from "../service/budget-service.service";

@Component({
  selector: 'app-expense-list',
  templateUrl: 'expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  expensesList: Expense[] = [];

  constructor(private budgetService: BudgetServiceService) { }

  ngOnInit(): void {
    this.getExpenseList()
  }

  getExpenseList(): void{
    this.expensesList = this.budgetService.getExpenses();
  }

}
