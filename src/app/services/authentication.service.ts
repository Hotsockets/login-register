import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user.model';
import { ReactiveFormsModule } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    public currentToken: BehaviorSubject<any> = new BehaviorSubject('');

    private urlBack = 'http://127.0.0.1:6686';

    constructor(private http: HttpClient) {
    }

    login(encodedUser) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${encodedUser}`
        });
        
        // this.currentToken.next(token)
        return this.http.get<any>(`${this.urlBack}/auth/signin`, { headers: headers})
        .pipe()
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentToken.next(null);
    }
}