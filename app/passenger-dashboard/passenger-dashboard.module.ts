import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common'; //for ngIf, ngFor, etc
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';

import {PassengerDashboardComponent} from './containers/passenger-dashboard/passenger-dashboard.component';
import {PassengerViewerComponent} from './containers/passenger-viewer/passenger-viewer.component';

import {PassengerCountComponent} from './components/passenger-count/passenger-count.component';
import {PassengerDetailComponent} from './components/passenger-detail/passenger-detail.component';
import {PassengerFormComponent} from './components/passenger-form/passenger-form.component';

import {PassengerDashboardService} from './passenger-dashboard.service';

@NgModule({
  declarations: [ //will hold all of the components relative to this module
    //when we start building components will be added in this section 
    PassengerDashboardComponent,
    PassengerViewerComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerFormComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  exports: [
     //what we usr in the parent, the app.component
    PassengerViewerComponent
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule {}