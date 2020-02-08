import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';   
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor { 

    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = this.authenticationService.currentToken.value;
        
        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
            console.log('toto' ,request)
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/x-www-form-urlencoded') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                }
                return event;
                
            }),
            catchError((error: HttpErrorResponse) => {
                let data = {};
                data = {
                    reason: error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                console.log(data);
                return throwError(error);
            })
        );
            
    }

    
}