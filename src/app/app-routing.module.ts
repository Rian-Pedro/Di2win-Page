import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FidcComponent } from './pages/fidc/fidc.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fidc', component: FidcComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
