import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
  private employeeUrl: string;

  public constructor(private http: HttpClient){
    this.employeeUrl = `${window.location.origin}${window.location.pathname}api/employee`;
  }

  public createEmployee(employee) {
    // make api get call
    return this.http.post(this.employeeUrl, employee)
      .map(
        data => {
          return data;
        },
        error => {
          return error.json();
        });
  }

  public getEmployee(id) {
    // update url
    let getEmployeeUrl = `${this.employeeUrl}/${id}`;

    // make api get call
    return this.http.get(getEmployeeUrl)
      .map(
        data => {
          return data;
        },
        error => {
          return error.json();
        });
  }

  public getEmployees() {
    // update url
    let getEmployeeUrl = `${this.employeeUrl}s`;

    // make api get call
    return this.http.get(getEmployeeUrl)
      .map(
        data => {
          return data;
        },
        error => {
          return error.json();
        });
  }

  public setEmployee(employee) {
    // update url
    let setEmployeeUrl = `${this.employeeUrl}/${employee.id}`;

    // make api put call
    return this.http.put(setEmployeeUrl, employee)
      .map(
        data => {
          return data;
        },
        error => {
          return error.json();
        });
  }

  public deleteEmployee(id) {
    // update url
    let deleteEmployeeUrl = `${this.employeeUrl}/${id}`;

    // make api delete call
    return this.http.delete(deleteEmployeeUrl)
      .map(
        data => {
          return data;
        },
        error => {
          return error.json();
        });
  }

}
