import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  baseApiUrl: string = 'https://localhost:7119/';

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseApiUrl + 'api/employee');
  }

  addEmployee(EmployeeForm: Employee): Observable<Employee> {
    EmployeeForm.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Employee>(
      this.baseApiUrl + 'api/employee',
      EmployeeForm
    );
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.baseApiUrl + 'api/employee/' + id);
  }

  updateEmployee(id: string, employeeDetails: Employee): Observable<Employee> {
    return this.http.put<Employee>(
      this.baseApiUrl + 'api/employee/' + id,
      employeeDetails
    );
  }

  deleteEmployee(id: string) {
    return this.http.delete(this.baseApiUrl + 'api/employee/' + id);
  }
}
