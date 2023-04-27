import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FidcComponent } from './pages/fidc/fidc.component';
import { BtnNavComponent } from './components/btn-nav/btn-nav.component';
import { OptionNavComponent } from './components/option-nav/option-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FidcComponent,
    BtnNavComponent,
    OptionNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
