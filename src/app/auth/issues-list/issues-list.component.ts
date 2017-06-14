import { Component, OnInit } from '@angular/core';
import { IssuesListService } from './services/issues-list.service';
import { Issue } from './models/issue.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component( {
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: [ './issues-list.component.css' ]
} )
export class IssuesListComponent implements OnInit {

  issues: Array<Issue> = [];

  constructor( private _issuesListService: IssuesListService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this._issuesListService.getAll().subscribe( ( projects: Issue[] = [] ) => {
        this.issues = projects;
      },
      err => {
        console.error( err );
      },
      () => {
        console.log( 'Finished!' );
      } );
  }

  onClickIssue( id: number ) {
    event.preventDefault();
    this.router.navigate( [ id ], { relativeTo: this.route } );
  }

}
