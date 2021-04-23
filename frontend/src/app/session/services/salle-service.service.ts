import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  constructor(private http: HttpClient) { }

  save(data: any): any
  {
    return this.http.post('http://127.0.0.1:8000/api/createSalle', data);
  }

  getAllSalles(): any
  {
    return this.http.get('http://127.0.0.1:8000/api/allSalles');
  }

  deleteData(id: any): any
  {
    return this.http.delete('http://127.0.0.1:8000/api/deleteSalle/' + id);
  }

  getSalleById(id: any): any
  {
    return this.http.get('http://127.0.0.1:8000/api/salle/' + id);
  }

  updateData(id: any, data: any): any
  {
    return this.http.put('http://127.0.0.1:8000/api/setSalle/' + id, data);
  }

}
