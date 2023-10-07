import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { TweetResolver } from './resolvers/tweet.resolver';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'form', component: FormComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], resolve: {tweets: TweetResolver} },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
