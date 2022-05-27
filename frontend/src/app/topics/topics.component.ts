import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbData } from '../breadcrumb/breadcrumb.component';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  course : any;
  breadcrumb : BreadcrumbData[] = [];
  dataSource = new MatTableDataSource();
  //displayedColumns: string[] = ['subject_name', 'no_posts', 'last_message'];
  displayedColumns: string[] = ['no_posts'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private messageService:MessageService, private route:ActivatedRoute, private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.course = id;
    console.log(this.course);
    this.messageService.sendMessage("getTopics",{id_cours:id}).subscribe(resultat=>{
      this.dataSource.data = resultat.data[0];
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
      this.breadcrumb = [{nom: 'Tous les cours / ', route: '/cours'},
                          {nom: resultat.data[1][0].course_name, route: ''}];
    });
  }

  @Input() id : any;

  onCreateTopic(data: any) {
    console.log("dans le OnCreateTopic");
    console.log(data);
    this.dataSource.data.push(data);
    console.log(this.dataSource.data);
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
