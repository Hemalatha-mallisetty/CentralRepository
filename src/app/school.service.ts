import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private apiUrl = 'http://example.com/api/schools'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getSchoolById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateSchool(id: number, schoolData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, schoolData);
  }
}
