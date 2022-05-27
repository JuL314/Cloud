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
    console.log("bravo vous avez appuyé sur le bouton nouveau sujet!");
    const dialogRef = this.dialog.open(CreateTopicDialogComponent, {
      width: '250px',
      data: {animal: this.animal, id_cours : this.id_cours},
    });
    console.log("ici");
    console.log(this.id_cours);
  

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      let data = result;
      if(data) {
        console.log(data);
        let to_send = {subject_name : data.nom_topic,subject_id : data.subject_id,last_message:null,no_posts:0,course_id:this.iddd};
        this.newTopic.emit(to_send);
        console.log("erreur deux");
        console.log(data);
      }
    });
  }

}
