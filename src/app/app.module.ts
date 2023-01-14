import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AwardsRecognitionComponent } from './components/awards-recognition/awards-recognition.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CareersComponent } from './components/careers/careers.component';
import { CsrImplementationComponent } from './components/csr-implementation/csr-implementation.component';
import { MediaComponent } from './components/media/media.component';
import { OurImpactComponent } from './components/our-impact/our-impact.component';
import { OurImpactTheUnstoppableComponent } from './components/our-impact-the-unstoppable/our-impact-the-unstoppable.component';
import { OurPeopleComponent } from './components/our-people/our-people.component';
import { OurPartnersComponent } from './components/our-partners/our-partners.component';
import { OurPresenceComponent } from './components/our-presence/our-presence.component';
import { ProblemAndSolutionsComponent } from './components/problem-and-solutions/problem-and-solutions.component';
import { ProgrammeWaterAndSubProgrammeComponent } from './components/programme-water-and-sub-programme/programme-water-and-sub-programme.component';
import { ReportsComponent } from './components/reports/reports.component';
import { WaterDrinkingWaterSecurityComponent } from './components/water-drinking-water-security/water-drinking-water-security.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

import { TopSliderComponent } from './components/homepage/top-slider/top-slider.component';
import { ItAllComponent } from './components/homepage/it-all/it-all.component';
import { OurProgrammesComponent } from './components/homepage/our-programmes/our-programmes.component';

import { DecadesOfComponent } from './components/homepage/decades-of/decades-of.component';
import { RecognitionComponent } from './components/homepage/recognition/recognition.component';
import { TrustedPartnersComponent } from './components/homepage/trusted-partners/trusted-partners.component';
import { OurPresenceHComponent } from './components/homepage/our-presence-h/our-presence-h.component';

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
// import { Testdata } from './testdata';
// import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    AwardsRecognitionComponent,
    AboutUsComponent,
    ContactUsComponent,
    CareersComponent,
    CsrImplementationComponent,
    MediaComponent,
    OurImpactComponent,
    OurImpactTheUnstoppableComponent,
    OurPeopleComponent,
    OurPartnersComponent,
    OurPresenceComponent,
    ProblemAndSolutionsComponent,
    ProgrammeWaterAndSubProgrammeComponent,
    ReportsComponent,
    WaterDrinkingWaterSecurityComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    TopSliderComponent,
    ItAllComponent,
    OurProgrammesComponent,
    OurPresenceComponent,
    OurPresenceHComponent,
    DecadesOfComponent,
    RecognitionComponent,
    TrustedPartnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CarouselModule
    // HttpClientInMemoryWebApiModule.forRoot(Testdata)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
