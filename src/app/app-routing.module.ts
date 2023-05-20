import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FidcComponent } from './pages/fidc/fidc.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { FaqComponent } from './pages/faq/faq.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fidc', component: FidcComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'faq', component: FaqComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
