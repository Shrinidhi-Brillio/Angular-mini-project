import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoginService } from '../login.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-budgethome',
  templateUrl: './budgethome.component.html',
  styleUrls: ['./budgethome.component.css'],

})
export class BudgethomeComponent {
  userDetails:any;
  public updateForm!:FormGroup
  updatedobject:any= {
    "fullname": "Shrinidhi",
    "email": "shrinidhi@gmail.com",
    "password": "6tyfd",
    "mobile": 8904858900,
    "id": 2,
    "income": 10000,
    "threshold": 3000,
    "currentexpenditure": 0

  }
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private login: LoginService) {
    this.login.userobs.subscribe((result) => {
      this.userDetails = result;
      console.log(result);


    });
  }
  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      updateamount: [''],
      updatethreshold: ['']
    })
  }
  updateamt() {
    this.updatedobject = this.login.userSource.getValue()
    this.updatedobject.income = this.updateForm.value['updateamount']
    this.updatedobject.threshold = this.updateForm.value['updatethreshold']
    this.http.put<any>("http://localhost:3000/RegisteredUsers/" + this.userDetails.id, this.updatedobject)
      .subscribe(res => {
        console.log(res)


      }, err => {
        alert("Something went Wrong!")
      })
  }


}
