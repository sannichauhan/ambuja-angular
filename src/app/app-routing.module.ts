import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './components/about-us/about-us.component';
import { AwardsRecognitionComponent } from './components/awards-recognition/awards-recognition.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CsrImplementationComponent } from './components/csr-implementation/csr-implementation.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MediaComponent } from './components/media/media.component';
import { OurImpactTheUnstoppableComponent } from './components/our-impact-the-unstoppable/our-impact-the-unstoppable.component';
import { OurImpactComponent } from './components/our-impact/our-impact.component';
import { OurPartnersComponent } from './components/our-partners/our-partners.component';
import { OurPeopleComponent } from './components/our-people/our-people.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProblemAndSolutionsComponent } from './components/problem-and-solutions/problem-and-solutions.component';
import { ProgrammeWaterAndSubProgrammeComponent } from './components/programme-water-and-sub-programme/programme-water-and-sub-programme.component';
import { ReportsComponent } from './components/reports/reports.component';
import { WaterDrinkingWaterSecurityComponent } from './components/water-drinking-water-security/water-drinking-water-security.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch:'full'},
  { path: 'homepage', component: HomepageComponent },
  { path: 'awards-recognition', component: AwardsRecognitionComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'csr-implementation', component: CsrImplementationComponent },
  { path: 'media', component: MediaComponent },
  { path: 'our-impact', component: OurImpactComponent },
  { path: 'our-impact-the-unstoppable', component: OurImpactTheUnstoppableComponent },
  { path: 'our-people', component: OurPeopleComponent },
  { path: 'our-partners', component: OurPartnersComponent },
  { path: 'our-presence', component: OurPartnersComponent },
  { path: 'problem-and-solutions', component: ProblemAndSolutionsComponent },
  { path: 'programme-water-and-sub-programme', component: ProgrammeWaterAndSubProgrammeComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'water-drinking-water-security', component: WaterDrinkingWaterSecurityComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
