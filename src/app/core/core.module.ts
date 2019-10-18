import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnivsComponent } from '../univs/univs.component';
import { UnivDetailComponent } from '../univ-detail/univ-detail.component';



@NgModule({
  declarations: [UnivsComponent, UnivDetailComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
