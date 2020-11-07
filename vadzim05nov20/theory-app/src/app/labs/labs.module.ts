import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabsrootComponent } from './labsroot/labsroot.component';
import { TimeComponent } from './time/time.component';
import { AboutComponent } from './about/about.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [LabsrootComponent, TimeComponent, AboutComponent, ImpressumComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    LabsrootComponent
  ]
})
export class LabsModule { }
