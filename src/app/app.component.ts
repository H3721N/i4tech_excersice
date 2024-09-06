import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogButtomComponent } from './dialog-buttom/dialog-buttom.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material';

  name?: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogButtomComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.name = result;
      }
    });
  }
}
