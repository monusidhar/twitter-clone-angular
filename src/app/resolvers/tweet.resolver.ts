import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { DashboardService } from '../dashboard/dashboard.service';

@Injectable({
    providedIn: 'root',
})

export class TweetResolver implements Resolve<any>{
    constructor(private dashboardService: DashboardService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.dashboardService.getTweets();
    }
}