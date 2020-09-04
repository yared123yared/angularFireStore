import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../Services/employee.service';
import{ AddEmployeeDialogComponent } from '../add-employee-dialog/add-employee-dialog.component';
 import { Employee } from '../../models/employee';
 import { MatDialog } from '@angular/material/dialog';
 



var ELEMENT_DATA:Employee[];
var add_employee:Employee[];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

name:string;
email:string;
espId:string;

  



  constructor(private itemService:EmployeeService,public dialog: MatDialog) { }
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
    this.itemService.getEmployee().subscribe(employes => {
      console.log(employes);
      ELEMENT_DATA=employes;
      this.dataSource = ELEMENT_DATA;
      console.log(ELEMENT_DATA); 
    })

  }
  displayedColumns: string[] = ['id','name','email','option'];



  openDialog(employee?:Employee):void{

    
var data:Employee;
if(employee){
  console.log(employee.espId);
  data={
    espId:employee.espId,
    name:employee.name,
    email:employee.email,
  }
}else{
  data={espId:null, name: this.name, email: this.email}
}
    
    const dialogRef = this.dialog.open(AddEmployeeDialogComponent, {
      
      width: '250px',
      data:data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      add_employee = result;
      console.log(this.name);
      console.log(result);
if(result.espId !=null){
  this.updateEmp();
}else{
  this.addEmp();

}
   
     
    });
   
  }
  addEmp(){
    const employeeObject = {...add_employee};
    this.itemService.addEmployee(employeeObject);
    
   
  }
  updateEmp(){
    console.log("Update method");
    // this is the update method
    const employeeObject = {...add_employee};
    this.itemService.updateEmployee(employeeObject);

  }
  deleteEmp(event,item){
  this.itemService.deleteEmployee(item);
  }

}



