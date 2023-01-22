import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { createSkipSelf } from '@angular/compiler/src/core';
import { throwIfAlreadyLoaded } from './untils/module-import-guard';
import { AuthHeaderInterceptorService } from './interceptors/auth-header-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptorService,
      multi:true
    }
      
    ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule

  ]
})
export class CoreModule { 
  
  constructor(@Optional()@SkipSelf() parentModule: CoreModule){
    throwIfAlreadyLoaded(parentModule,'CoreModule');
  }
}
    