import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private get url(): string {
    return environment.baseUrl + "Employee";
  }
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  update(id: number,employee: any) {
    return this.http.put(this.url + "/" + id, employee);
  }

  saveData(employee: any) {
    return this.http.post(this.url, employee);
  }

}
