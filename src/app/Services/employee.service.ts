import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
// import { Observable } from 'rxjs/Observable';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import {Employee} from '../models/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   counter=0;
 employesCollection:AngularFirestoreCollection<Employee>;
  employes:Observable<Employee[]>;
  employe:AngularFirestoreDocument<Employee>;

  constructor(public afs:AngularFirestore) { 
    
    this.employes=this.afs.collection('Employee').snapshotChanges().map(changes => {
      return changes.map(a => {
      
        this.counter+=1;
      const data=a.payload.doc.data() as Employee;
      data.id=this.counter;
      data.espId=a.payload.doc.id;
      return data;
    })});

    console.log("these is the data obtained");
    console.log(this.employes);
    console.log("thse is the end of the data");
  }
  getEmployee(){
    return this.employes;
  }
  addEmployee(employe){
    // emlpyess added here
    this.counter=0;
    return this.afs.collection('Employee').add(employe);
  
  }
  deleteEmployee(employee){
    // delete a single employe
    this.counter=0;
    this.afs.doc('Employee/' + employee.espId).delete();
  }
  updateEmployee(employee){
    console.log("service update method");
    console.log(employee);
    // update single employe data
    this.counter=0;
    this.afs.doc('Employee/' + employee.espId).update(employee);
  }
  }
 
