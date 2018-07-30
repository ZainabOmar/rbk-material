import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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

import { DataService } from './data.service';

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
