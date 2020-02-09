import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    

    private urlBack = 'http://127.0.0.1:6686';

    constructor(private http: HttpClient, private router: Router) {
    }

    login(encodedUser) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${encodedUser}`
        });

        return this.http.get<any>(`${this.urlBack}/auth/signin`, { headers: headers})
        .pipe(
            map(data => {
                localStorage.setItem('currentUser', JSON.stringify({token : data.token}))
                localStorage.setItem('roleUser', JSON.stringify({role : data.role}))
                localStorage.setItem('firstName', JSON.stringify({firstName : data.firstName}))
            })
        )
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('roleUser');
        localStorage.removeItem('firstName');

        if(this.router.url !== '/') {
            this.router.navigate(['/']);
        } else {
            window.location.reload();
        }
    }
}