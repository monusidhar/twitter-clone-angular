import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean = false;
  constructor(private auth:AuthService){
    this.auth.user.subscribe(user => {
      this.isLoggedIn = !!user;
    })
  }
}
