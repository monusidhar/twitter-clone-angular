import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoaderComponent } from './loader/loader.component';
import { SignupComponent } from './signup/signup.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ArticleComponent } from './article/article.component';
import { TwitterProfileComponent } from './twitter-profile/twitter-profile.component';
import { TwitterFollowComponent } from './twitter-follow/twitter-follow.component';
import { TwitterFeedPostComponent } from './twitter-feed-post/twitter-feed-post.component';
import { TrendingCardComponent } from './trending-card/trending-card.component';
import { TweetBoxComponent } from './tweet-box/tweet-box.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { FormComponent } from './form/form.component';
import { CustomStyleDirective } from './custom-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    LoaderComponent,
    SignupComponent,
    SidebarComponent,
    ArticleComponent,
    TwitterProfileComponent,
    TwitterFollowComponent,
    TwitterFeedPostComponent,
    TrendingCardComponent,
    TweetBoxComponent,
    FormComponent,
    CustomStyleDirective
  ],
  schemas:[
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
