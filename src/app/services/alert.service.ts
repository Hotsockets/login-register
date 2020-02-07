import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AlertService {
    private behaviourSubject= new BehaviorSubject<any>('');
    private keepAfterNavigationChange: boolean = false;

    constructor(private router: Router) {
        this.router.events.subscribe( event => {
            if(event instanceof NavigationStart) {
                if(this.keepAfterNavigationChange) {
                    this.keepAfterNavigationChange = false;
                } else {
                    this.behaviourSubject.next('');
                }
            }
        })
    }

    success(message: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.behaviourSubject.next({type: 'success', text: message});
    }

    error(message: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.behaviourSubject.next({type: 'error', text: message});
    }

    getMessage(): Observable<any> {
        return this.behaviourSubject.asObservable();
    }
}