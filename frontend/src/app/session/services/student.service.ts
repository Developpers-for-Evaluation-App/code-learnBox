import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  save(data: any): any
  {
    return this.http.post('http://127.0.0.1:8000/api/createStudent', data);
  }

  getAllStudents(id: any): any
  {
    return this.http.get('http://127.0.0.1:8000/api/allStudents/' + id);
  }

  deleteData(id: any): any
  {
    return this.http.delete('http://127.0.0.1:8000/api/deleteStudent/' + id);
  }

}
