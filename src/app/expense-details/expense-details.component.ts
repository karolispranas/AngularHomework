import { Component, OnInit } from '@angular/core';
import {Expense} from "../interface/expense";
import {ActivatedRoute} from "@angular/router";
import {BudgetServiceService} from "../service/budget-service.service";

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.css']
})
export class ExpenseDetailsComponent implements OnInit {
  expense: Expense = {} as Expense;
  id: string | null = '';

  constructor(private budgetService: BudgetServiceService,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id){
      // @ts-ignore
      this.expense = this.budgetService.getExpense(this.id);
    }
  }

}
