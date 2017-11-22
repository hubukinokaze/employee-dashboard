import { Component, ViewChild, Inject } from '@angular/core';
import { UserService } from "../../services/user.service";
import { EmployeeService } from "../../services/employee.service";
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public columns: any[];
  public employeeList: any;
  public filterValueList: any[];
  public filterName: string;
  public searchFilter: string;
  public dataSource = new MatTableDataSource<Employee>();

  public resultsLength = 0;
  public isLoadingResults = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService, private employeeService: EmployeeService, private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.columns = [
      'id',
      'name',
      'phoneNumber',
      'supervisor'
    ];
    this.filterValueList = [
      {value: 'id', name: 'ID'},
      {value: 'name', name: 'Name'},
      {value: 'phone', name: 'Phone Number'},
      {value: 'supervisor', name: 'Supervisor'}
    ]
    this.filterName = 'name';
    this.searchFilter = '';
  }

  ngOnInit() {
    this.isLoadingResults = true;
    this.getEmployees();
  }

  public setData(data) {
    this.dataSource = new MatTableDataSource<Employee>(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private getEmployees() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employeeList = data;
      this.resultsLength = Object.keys(data).length;
      this.isLoadingResults = false;
      this.setData(data);
    });
  }

  private getEmployee(id) {
    this.employeeService.getEmployee(id).subscribe();
  }

  public createEmployee(employee) {
    this.employeeService.createEmployee(employee).subscribe();
  }

  public setEmployee(employee) {
   this.employeeService.setEmployee(employee).subscribe();
  }

  public deleteEmployee(id) {
    this.employeeService.deleteEmployee(id).subscribe();
  }

  public changeFilter(selected) {
    this.filterName = selected;
    this.clearFilter();
  }

  public clearFilter() {
    this.searchFilter = null;
    // refresh list
    this.setData(this.employeeList)
  }

  public filterList(event) {
    const val = event.toLowerCase().trim();
    const filterName = this.filterName;

    // filter our data
    const tempEmployeeList = this.employeeList.filter(function(d) {
      if (filterName === 'id') {
        return d.id.toString().indexOf(val) !== -1 || !val;
      }
      else if (filterName === 'name') {
        return d.name.toLowerCase().indexOf(val) !== -1 || !val;
      }
      else if (filterName === 'phone') {
        return d.phoneNumber.toLowerCase().indexOf(val) !== -1 || !val;
      }
      else if (filterName === 'supervisor') {
        return d.supervisor.toLowerCase().indexOf(val) !== -1 || !val;
      }
    });

    this.setData(tempEmployeeList);
  }

  public addEmployeeDialog(): void {
    let dialogRef = this.dialog.open(AddDialogOverview, {
      width: '300px',
      data: {id: this.resultsLength+1}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != '' && result != undefined) {
        this.employeeList.splice(0, 0, result);
        this.createEmployee(result);
        this.setData(this.employeeList);
        this.snackBar.open('Successfully Added', 'Dismiss',{duration: 2500});
      }
    });
  }

  public editEmployeeDialog(rowData, index): void {
    let dialogRef = this.dialog.open(EditDialogOverview, {
      width: '300px',
      data: rowData
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != '' && result != undefined) {
        let employeePos = this.employeeList.map(function(x) {return x.id; }).indexOf(rowData.id);

        this.employeeList.splice(employeePos, 1);
        if (typeof result === 'number') {
          this.deleteEmployee(result);
          this.snackBar.open('Successfully Deleted', 'Dismiss',{duration: 2500});
        }
        else if (typeof result === 'object') {
          this.employeeList.splice(employeePos, 0, result);
          this.setEmployee(result);
          this.snackBar.open('Successfully Updated', 'Dismiss',{duration: 2500});
        }
        this.clearFilter();
        this.setData(this.employeeList);
      }
    });
  }
}


@Component({
  selector: 'dialog-overview',
  templateUrl: './add-dialog-overview.component.html',
})
export class AddDialogOverview {
  public newData: Employee;
  public isFilled: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.newData = {
      id: data.id,
      name: '',
      phoneNumber: '',
      supervisor: '',
      createdDate: ''
    };
    this.isFilled = false;
  }

  public checkIsFilled() {
    if (this.newData.name != '' && this.newData.phoneNumber != '' && this.newData.supervisor != '') {
      this.isFilled = true;
    } else {
      this.isFilled = false;
    }
  }

  public addDate(){
    this.newData.createdDate = new Date().toISOString();
  }
}

@Component({
  selector: 'dialog-overview',
  templateUrl: './edit-dialog-overview.component.html',
})
export class EditDialogOverview {
  public newData: Employee;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.newData = {
      id: data.id,
      name: data.name,
      supervisor: data.supervisor,
      createdDate: data.createdDate,
      phoneNumber: data.phoneNumber
    }
  }
}

export interface Employee {
  id: number;
  name: string;
  phoneNumber: string;
  supervisor: string;
  createdDate: string;
}
