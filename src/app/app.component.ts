import { Component } from '@angular/core';

interface BudgetItem {
  name: string;
  amount: number;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BudgetManagementSystem';
  budgetItems: BudgetItem[] = [];
  itemName: string | any;
  itemAmount: number | any;

  
  addItem() {
    if (this.itemName !== '' && this.itemAmount !== 0) {
      const newItem: BudgetItem = {
        name: this.itemName,
        amount: this.itemAmount
      };
      this.budgetItems.push(newItem);
      this.itemName = '';
      this.itemAmount = 0;
    }
  }

  deleteItem(item: BudgetItem) {
    const index = this.budgetItems.indexOf(item);
    if (index >= 0) {
      this.budgetItems.splice(index, 1);
    }
  }

  totalSpending(): number {
    let total = 0;
    this.budgetItems.forEach(item => total += item.amount);
    return total;
  }
}


