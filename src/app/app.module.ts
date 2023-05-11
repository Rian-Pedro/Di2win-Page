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
import { BtnContatoComponent } from './components/utilities/btn-contato/btn-contato.component';
import { CarrosselComponent } from './components/utilities/carrossel/carrossel.component';
import { TestarGratisComponent } from './components/utilities/testar-gratis/testar-gratis.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { NavTabletComponent } from './components/navbar/nav-tablet/nav-tablet.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { ButtonComponent } from './components/utilities/button/button.component';
import { ArqsExportsComponent } from './components/arqs-exports/arqs-exports.component';

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
    BtnContatoComponent,
    CarrosselComponent,
    TestarGratisComponent,
    SobreComponent,
    NavTabletComponent,
    FeedbackComponent,
    ButtonComponent,
    ArqsExportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
