import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  data: Array<any>;
  employee: any;

  isModifying = false;
  isNew = true;

  constructor(private employeeSvc: EmployeeService) {
    this.data = new Array<any>()
  }


  ngOnInit(): void {
    this.getDataFromAPI();
    }

  getDataFromAPI() {
    this.employeeSvc.getData().subscribe((data) => {
      console.log(data)
      this.data = data;
    });
  }

  cancel() {
    this.isModifying = false;
  }

  newEmployee() {
    this.employee = {
      firstName: "",
      middleName: "",
      lastName: ""
    }
    this.isModifying = true;
    this.isNew = true;
  }

  editEmployee(emp: any) {
    this.employee = emp;
    this.isModifying = true;
    this.isNew = false;
  }

  update() {

    let subscriber = this.employeeSvc.update(this.employee.id,this.employee).subscribe({
      next: res => {
        console.log(res);
      }, error: e => {
        console.log(e);
        subscriber.unsubscribe();
      }, complete: () => {
        this.isModifying = false;
        subscriber.unsubscribe();
      }
    });
  }

  save() {
    let subscriber = this.employeeSvc.saveData(this.employee)
      .subscribe({
        next: res => {
          console.log(res);
        }, error: e => {
          console.log(e);
          subscriber.unsubscribe();
        }, complete: () => {
          this.isModifying = false;
          subscriber.unsubscribe();
         
        }
      });
  }
}

