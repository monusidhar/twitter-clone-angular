import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'twitter-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tweets: any = [];
constructor(private authService: AuthService, private route: ActivatedRoute){

}

ngOnInit(): void {
  this.route.data.subscribe(data => {
   console.log(data);
  });
}
  logout(){
    this.authService.logout();
  }
}
