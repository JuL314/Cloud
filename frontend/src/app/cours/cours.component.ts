import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MessageService } from '../message/message.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['course_name', 'no_subjects'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  @Input() id = 0;

  constructor(private messageService:MessageService, private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.messageService.sendMessage("getCours",{}).subscribe(resultat=>{
      this.dataSource.data = resultat.data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(resultat);
    });
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
