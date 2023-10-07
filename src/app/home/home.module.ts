import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HomeRoutingModule } from './home.routing.module';
import { InhomeComponent } from './inhome/inhome.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    InhomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        { path: '', component: InhomeComponent }
    ])
  ],
  exports: [
    InhomeComponent
  ]
})
export class HomeModule { }
