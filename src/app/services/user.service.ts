import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class UserService {

    private urlBack = 'http://127.0.0.1:6686';

    constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

    getById(id: number) {
        return this.http.get(`/users/${id}`);
    }

    getAll() {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        })
        return this.http.get<any>(`${this.urlBack}/users`, {headers: headers});
    }

    register(user: User) {
        return this.http.post(`/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`/users/${user.id}`, user);
    }

}
