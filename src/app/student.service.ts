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
    return this.http.get<Student[]>('http://student-report-frontend-app.herokuapp.com/students/all');
  }

  public  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>('http://student-report-frontend-app.herokuapp.com/students/add', student);
  }

  public getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>('http://student-report-frontend-app.herokuapp.com/find/${id}');
  }

  public updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>('http://student-report-frontend-app.herokuapp.com/students/update',student);
  }

  public deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>('http://student-report-frontend-app.herokuapp.com/students/delete/${id}');
  }

}

