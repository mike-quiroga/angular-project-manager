import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Issue } from '../issues-list/models/issue.model';
import { IssuesListService } from '../issues-list/services/issues-list.service';
;

@Component({
  selector: 'app-issues-detail',
  templateUrl: './issues-detail.component.html',
  styleUrls: ['./issues-detail.component.css']
})
export class IssuesDetailComponent implements OnInit {
  issue: Issue;
  constructor(private router: Router, private route: ActivatedRoute, private _issuesListService: IssuesListService) {
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      const id: number = params[ 'id' ];
      this._issuesListService.getIssue(id).subscribe(
        (data) => {
          console.log(data);
          this.issue = data;
        },
        err => {
          console.error(err);
        },
        () => {});

    } );
  }

  eliminarIssue( id: number )  {
    this._issuesListService.deleteIssue(id).subscribe(data => {
      console.log( data );
      this.router.navigate(['..'], { relativeTo: this.route });
    });
  }

  regresar() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }

}
