import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public students!: Student[];
  public editStudent!: Student;
  public deleteStudent!: Student;

  constructor(private studentService: StudentService) { }
  student!: Student;
  ngOnInit(){
    this.getAllStudents();
    }



  public getAllStudents(): void {
    this.studentService.getAllStudents().subscribe(
      (response: Student[]) => { this.students = response;},
      (error: HttpErrorResponse) => {alert(error.message);}
    );
  }

  public createStudent(addForm: NgForm): void {
    const container = document.getElementById('add-student-form');   
      container!.click();
   this.studentService.createStudent(addForm.value).subscribe(
      (response: Student) => {
       console.log(response);
       this.getAllStudents();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public myUpdateStudent(student: Student): void {
    this.studentService.updateStudent(student
    ).subscribe(
      (response: Student) => {
        console.log(response);
        this.getAllStudents();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public myDeleteStudent(id: number): void {
    this.studentService.deleteStudent(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getAllStudents();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchStudents(key: string): void {
    const results: Student[] = [];
    for (const student of this.students) {
      if (student.studentFirstName.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || student.studentLastName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(student);
      }
    }
    this.students = results;
    if (results.length === 0 || !key) {
      this.getAllStudents();
    }
  }




  public onOpenModal(student: Student, mode: string): void {

    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'non';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'add') {
      button.setAttribute('data-target', '#addStudentModal');
    }
      if (mode === 'edit') {
        this.editStudent = student;
        button.setAttribute('data-target', '#updateStudentModal');
    }

      if (mode === 'delete') {
        this.deleteStudent = student;
        button.setAttribute('data-target', '#deleteStudentModal');
      }
    
      container!.appendChild(button);
      button.click();
    

  }

}
