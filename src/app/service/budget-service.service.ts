import { Injectable } from '@angular/core';
import {Expense} from "../interface/expense";

@Injectable({
  providedIn: 'root'
})
export class BudgetServiceService {
  expensesList: Expense[] = [{
    id: "1",
    name: "Electricity",
    amount: "20.05",
  },
  {
    id: "2",
    name: "Fuel",
    amount: "50.50",
    description: "Fuel is very expensive"
  },
  {
    id: "3",
    name: "Snacks",
    amount: "10.30",
  },
  {
    id: "4",
    name: "Energy drinks",
    amount: "07.56",
    description: "Not good for you"
  },
  ];
  constructor() { }

  getExpenses(): Expense[]{
    return this.expensesList;
  }

  getExpense(id:string) {
    return this.expensesList.find((obj) => {
      return obj.id === id;
    });

  }

}
