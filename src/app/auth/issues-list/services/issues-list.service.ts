import { Injectable } from '@angular/core';
import { Issue } from '../models/issue.model';
import { HttpService } from '../../../common/services/http.service';
import { Http } from '@angular/http';
import { AuthenticationService } from '../../../common/services/authentication.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IssuesListService extends HttpService {

  constructor(public _http: Http, private _authService: AuthenticationService ) {
    super(_http);
  }

  public getAll(): Observable<Array<Issue>> {
    const url = `${this.apiBaseURL}/issues`;
    return this.get( url, this._authService.user.api_token );
  }

  public getIssue( id: number ): Observable<Issue> {
    const url = `${this.apiBaseURL}/issues/${id}`;
    return this.get( url, this._authService.user.api_token );
  }

  public deleteIssue( id: number ): Observable<Issue> {
    const url = `${this.apiBaseURL}/issues/${id}`;
    return this.delete( url, this._authService.user.api_token );
  }

}
