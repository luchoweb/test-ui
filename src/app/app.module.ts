import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavbarComponent } from './components/shared/header/navbar/navbar.component';
import { PreviousRulingComponent } from './components/previous-ruling/previous-ruling.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { PastTrialsComponent } from './pages/past-trials/past-trials.component';
import { LoginSignUpComponent } from './pages/login-sign-up/login-sign-up.component';
import { SubmitNameComponent } from './pages/submit-name/submit-name.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'past-trials', component: PastTrialsComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'login-sign-up', component: LoginSignUpComponent },
  { path: 'submit-name', component: SubmitNameComponent },
  { path: 'terms-conditions', component: TermsConditionsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    PreviousRulingComponent,
    HomeComponent,
    PageNotFoundComponent,
    HowItWorksComponent,
    PastTrialsComponent,
    LoginSignUpComponent,
    SubmitNameComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
