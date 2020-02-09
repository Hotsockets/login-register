import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

import { User } from '../models/user.model';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class UserService {

    private urlBack = 'http://127.0.0.1:6686';

    constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

    getById(id: number) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        })
        return this.http.get(`${this.urlBack}/users/${id}`, {headers: headers});
    }

    getAll() {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        })
        return this.http.get<any>(`${this.urlBack}/users`, {headers: headers});
    }

    register(body: User) {
        return this.http.post(`${this.urlBack}/auth/signup`, body);
    }

    update(user: User) {
        return this.http.put(`/users/${user.id}`, user);
    }

}
