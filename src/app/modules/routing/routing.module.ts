import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { AdmissionComponent } from '../../components/home/layout/admission/admission.component';
import { OutcomesComponent } from '../../components/home/layout/outcomes/outcomes.component';
import { ProgramComponent } from '../../components/home/layout/program/program.component';
import { CurriculumComponent } from '../../components/home/layout/curriculum/curriculum.component';
import { ApplyComponent } from '../../components/home/layout/apply/apply.component';
import { VolunteerComponent } from '../../components/home/layout/volunteer/volunteer.component';
import { PartnersComponent } from '../../components/home/layout/partners/partners.component';
import { MainComponent } from '../../components/home/layout/main/main.component';



const appRouts: Routes = [
  { path: '', component: MainComponent },
  { path: 'admissions', component: AdmissionComponent },
  { path: 'outcomes', component: OutcomesComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'curriculum', component: CurriculumComponent },
  { path: 'apply', component: ApplyComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'partners', component: PartnersComponent },

];






@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouts),
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
