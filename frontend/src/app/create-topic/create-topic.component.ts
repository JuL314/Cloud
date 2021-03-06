import {Component, Inject, Input, Output, EventEmitter} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateTopicDialogComponent } from '../create-topic-dialog/create-topic-dialog.component';

export interface DialogData {
  animal: string;
  id_cours : number;
}

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss']
})
export class CreateTopicComponent{

  animal!: string;
  id_cours!: number;

  constructor(public dialog: MatDialog) { }

  @Input() iddd = 0;
  @Output() newTopic = new EventEmitter<any>();

  openDialog(): void{
    this.id_cours = this.iddd;
    const dialogRef = this.dialog.open(CreateTopicDialogComponent, {
      width: '250px',
      data: {animal: this.animal, id_cours : this.id_cours},
    });  

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      let data = result;
      if(data) {
        let to_send = {text:data.nom_topic}
        this.newTopic.emit(to_send);
      }
    });
  }

}
