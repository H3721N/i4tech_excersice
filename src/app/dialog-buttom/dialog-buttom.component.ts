import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-buttom',
  templateUrl: './dialog-buttom.component.html',
  styleUrls: ['./dialog-buttom.component.css']
})
export class DialogButtomComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogButtomComponent>
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onConfirm(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.get('name')?.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
