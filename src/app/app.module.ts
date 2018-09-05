import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RoutingModule } from './modules/routing/routing.module';
import { MaterialModule } from './modules/material/material.module';
import { TabsComponent } from './components/home/tabs/tabs.component';
import { MainComponent } from './components/home/layout/main/main.component';
import { NavComponent } from './components/home/nav/nav.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { HeaderComponent } from './components/home/layout/header/header.component';
import { AdmissionComponent } from './components/home/layout/admission/admission.component';
import { OutcomesComponent } from './components/home/layout/outcomes/outcomes.component';
import { ProgramComponent } from './components/home/layout/program/program.component';
import { CurriculumComponent } from './components/home/layout/curriculum/curriculum.component';
import { WhyComponent } from './components/home/layout/main/why/why.component';
import { CounterComponent } from './components/home/layout/main/counter/counter.component';
import { PeopleComponent } from './components/home/layout/main/people/people.component';
import { HiringComponent } from './components/home/layout/main/hiring/hiring.component';
import { PartnersComponent } from './components/home/layout/partners/partners.component';
import { WhereComponent } from './components/home/layout/outcomes/where/where.component';
import { VolunteerComponent } from './components/home/layout/volunteer/volunteer.component';
import { ApplyComponent } from './components/home/layout/apply/apply.component';
import { SDGsComponent } from './components/home/layout/main/sdgs/sdgs.component';
import { BannerComponent } from './components/home/layout/main/banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabsComponent,
    MainComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    AdmissionComponent,
    OutcomesComponent,
    ProgramComponent,
    CurriculumComponent,
    WhyComponent,
    CounterComponent,
    PeopleComponent,
    HiringComponent,
    PartnersComponent,
    WhereComponent,
    VolunteerComponent,
    ApplyComponent,
    SDGsComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
