import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { HttpErrorHandler, HandleError } from './http-error-handler.service';

import { Item } from './item';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type':  'application/json'
	})
};

@Injectable()
export class SearchService {
	searchUrl = 'https://csci571nodejsbackend.wl.r.appspot.com/search?';  // URL to web api
	// constructor(private http: HttpClient,
				// httpErrorHandler: HttpErrorHandler) {
		// this.handleError = httpErrorHandler.createHandleError('SearchService'); 
	// }
	constructor(private http: HttpClient) {}

	/* GET heroes whose name contains search term */
	searchItems(params: string): Observable<Item[]> {
		/* Handle the params */
		var searchUrl = this.searchUrl + params;
		// this.http.get(searchUrl).subscribe(res=> console.log(res));
		return this.http.get<Item[]>(searchUrl);
		// .pipe(
			// catchError(this.handleError('searchItems', []))
		// );
  }
}
