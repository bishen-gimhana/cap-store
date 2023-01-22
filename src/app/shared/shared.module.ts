import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';


import { SharedRoutingModule } from './shared-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CsMaterialModule } from './material-module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule,
    CsMaterialModule 
  ],
    exports:[
      CsMaterialModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      FlexLayoutModule




    ]

    
    
    

  
})
export class SharedModule { }
