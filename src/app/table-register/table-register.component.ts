import {Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-register',
  templateUrl: './table-register.component.html',
  styleUrls: ['./table-register.component.css']
})
export class TableRegisterComponent {
  displayedColumns = ['id', 'name', 'age'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;


  constructor() {
    this.dataSource = new MatTableDataSource(USER_DATA);
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = '';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }
  
}

const USER_DATA: UserData[] = [
  { id: '1', name: 'Maia', age: 25 },
  { id: '2', name: 'Herlin', age: 30 },
  { id: '3', name: 'Olivia', age: 22 },
  { id: '4', name: 'Fernando', age: 35 },
  { id: '5', name: 'Amelia', age: 28 },
  { id: '6', name: 'Jack', age: 40 },
  { id: '7', name: 'Charlotte', age: 29 },
  { id: '8', name: 'Celina', age: 33 },
  { id: '9', name: 'Oliver', age: 38 },
  { id: '10', name: 'Pamela', age: 26 },
  { id: '11', name: 'Isabella', age: 27 },
  { id: '12', name: 'Jasper', age: 34 },
];

export interface UserData {
  id: string;
  name: string;
  age: number;
}