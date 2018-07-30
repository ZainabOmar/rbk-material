import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatStepperModule,
    MatCardModule
  ],
  exports: [
    MatTabsModule,
    MatIconModule,
    MatStepperModule,
    MatCardModule
  ],
  declarations: []
})
export class MaterialModule { }
