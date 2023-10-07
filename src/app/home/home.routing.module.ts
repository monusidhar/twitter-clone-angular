import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InhomeComponent } from './inhome/inhome.component';

const routes: Routes = [
  { path: 'inhome', component: InhomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }