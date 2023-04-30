import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FidcComponent } from './pages/fidc/fidc.component';
import { BtnNavComponent } from './components/btn-nav/btn-nav.component';
import { OptionNavComponent } from './components/option-nav/option-nav.component';
import { NavComponent } from './components/navbar/nav/nav-smartphone.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { NavDesktopComponent } from './components/navbar/nav-desktop/nav-desktop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FidcComponent,
    BtnNavComponent,
    OptionNavComponent,
    NavComponent,
    FooterComponent,
    NavDesktopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
