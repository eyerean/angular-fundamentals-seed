import { Component, Input } from '@angular/core';

import { Passenger} from '../../models/passenger.interface';

@Component({
  selector: 'passenger-count',
  template: `
    <div>
      <h3>Airline Passengers!</h3>
      <div>
        Total checked in passengers: {{ checkedInCount() }} / {{items?.length }}
      </div>
    </div>
  `
})
export class PassengerCountComponent{
  @Input()//it tells that items is going to be an input binding
  items: Passenger[]; //items is the prop that comes from the parent
  checkedInCount(): number{
    if(!this.items) return;
    return this.items.filter( (passenger: Passenger) => passenger.checkedIn).length;
  }
}