import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor( private http : HttpClient) { }

  public getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('https://student-report-app.herokuapp.com');
  }

  public  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>('https://student-report-app.herokuapp.com/add', student);
  }

  public getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>('https://student-report-app.herokuapp.com/${id}');
  }

  public updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>('https://student-report-app.herokuapp.com/update',student);
  }

  public deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>('http://localhost:8080/students/delete/${id}');
  }

}

