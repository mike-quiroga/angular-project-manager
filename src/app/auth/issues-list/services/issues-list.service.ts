import { Injectable } from '@angular/core';
import { Issue } from '../models/issue.model';
import { HttpService } from '../../../common/services/http.service';
import { Config } from '../../../common/config';
import { AuthenticationService } from '../../../common/services/authentication.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IssuesListService {

  apiBaseURL: string = Config.API_SERVER_URL;

  constructor( public _http: HttpService, private _authService: AuthenticationService ) {

  }

  public getAll(): Observable<Array<Issue>> {
    const issues: Array<Issue> = [];
    const url = `${this.apiBaseURL}/issues`;

    return this._http.get( url, this._authService.user.api_token );
  }

  public getIssue( id: number ): Observable<Issue> {
    const url = `${this.apiBaseURL}/issues/${id}`;
    return this._http.get( url, this._authService.user.api_token );
  }

  public deleteIssue( id: number ): Observable<Issue> {
  const url = `${this.apiBaseURL}/issues/${id}`;
  return this._http.delete( url, this._authService.user.api_token );
}

}
