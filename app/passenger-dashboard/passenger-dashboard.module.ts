import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common'; //for ngIf, ngFor, etc

import {PassengerDashboardComponent} from './containers/passenger-dashboard/passenger-dashboard.component';
import {PassengerCountComponent} from './components/passenger-count/passenger-count.component';
import {PassengerDetailComponent} from './components/passenger-detail/passenger-detail.component';

@NgModule({
    declarations: [ //will hold all of the components relative to this module
        //when we start building components will be added in this section 
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PassengerDashboardComponent //what we usr in the parent, the app.component
    ]
})
export class PassengerDashboardModule {}