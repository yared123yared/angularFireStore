import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { HomeComponent } from './Components/Home/home.component';
import {EmployeeService} from './Services/employee.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from  '@angular/material/form-field';
import {MatInputModule} from  '@angular/material/input';
import {MatIconModule} from  '@angular/material/icon';

import { FormsModule } from '@angular/forms';
import { AddEmployeeDialogComponent } from './Components/add-employee-dialog/add-employee-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddEmployeeDialogComponent,
   
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'anfs'),
    AngularFirestoreModule,
    BrowserAnimationsModule,

    // 
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule
  ],

  entryComponents:[AddEmployeeDialogComponent],

  providers: [EmployeeService],
  bootstrap: [AppComponent]
})

export class AppModule { }

