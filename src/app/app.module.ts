import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavbarComponent } from './components/shared/header/navbar/navbar.component';
import { PollHeaderComponent } from './components/poll-header/poll-header.component';
import { PreviousRulingComponent } from './components/previous-ruling/previous-ruling.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SubmitNameComponent } from './components/shared/footer/submit-name/submit-name.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    PollHeaderComponent,
    PreviousRulingComponent,
    SubmitNameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
