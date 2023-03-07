import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgethomeComponent } from './budgethome/budgethome.component';
import { ExpenditureComponent } from './expenditure/expenditure.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',pathMatch:'full',redirectTo:''},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path: 'budgethome',component:BudgethomeComponent},
  {path:'expenditure',component:ExpenditureComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
