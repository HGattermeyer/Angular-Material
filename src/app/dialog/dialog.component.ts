import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  public message = '';

  constructor(private dialog: MatDialog) { }

  public openDialog() {
    const dialogRef = this.dialog.open(DialogModalComponent, {
      data: 'Grey Cat',
      enterAnimationDuration: '100ms',
      exitAnimationDuration: '100ms'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.message = result !== undefined ? result : ''
    })
  }
}
