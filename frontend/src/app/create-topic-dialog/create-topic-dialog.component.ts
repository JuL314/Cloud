import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService } from '../message/message.service';

export interface DialogData {
  animal: string;
  id_cours : number;
}

@Component({
  selector: 'app-create-topic-dialog',
  templateUrl: './create-topic-dialog.component.html',
  styleUrls: ['./create-topic-dialog.component.scss']
})
export class CreateTopicDialogComponent {

  animal!: string;
  id_cours!: number;
  errorMessage="";

  constructor(public dialogRef: MatDialogRef<CreateTopicDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreateTopicDialogComponent,
    @Inject(MessageService) private messageService: MessageService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  newTopic(){
    let id = this.data.id_cours;
    let nom_topic = this.animal;
    
    this.messageService.sendMessage("saveNewTopic",{nom:nom_topic,id_cours:id}).subscribe(resultat=>{
      if(resultat.data.reason){
        this.errorMessage=resultat.data.reason;
        console.log(this.errorMessage);
      }
      else {
        let subject_id = resultat.data[0].suject_id;
        this.dialogRef.close({nom_topic,subject_id});
      }
    });
  }

}
