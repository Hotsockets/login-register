import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

import { User } from '../models/user.model';
import { AuthenticationService } from './authentication.service';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {

    headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
    })

    constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/users/${id}`, {headers: this.headers});
    }

    getAll() {
        return this.http.get<any>(`${environment.apiUrl}/users`, {headers: this.headers});
    }

    register(body) {
        return this.http.post(`${environment.apiUrl}/auth/signup`, body);
    }

    update(user: User) {
        return this.http.put(`/users/${user.id}`, user);
    }

}
