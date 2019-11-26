import { Component, OnInit } from '@angular/core';
import { AppServices } from '../../services/app-services.service';

import * as moment from 'moment';

@Component({
  selector: 'app-previous-ruling',
  templateUrl: './previous-ruling.component.html',
  styleUrls: ['./previous-ruling.component.scss'],
  providers:  [ AppServices ]
})
export class PreviousRulingComponent implements OnInit {

  public polls: any = '';

  constructor( private appServices: AppServices) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.appServices.getJSON()
      .subscribe((resp: Array<any>) => {
        this.polls = resp.filter( ( poll ) => poll.type === 'normal' );
      });
  }

  percentBars( type, vUp, vDown ) {
    let percent = 0;
    if ( type === 'up' ) {
      percent = (vUp * 100) / (vUp + vDown);
    } else if ( type === 'down' ) {
      percent = (vDown * 100) / (vUp + vDown);
    }

    return percent.toFixed(0);
  }

  formatDate( date ) {
    return moment(date, 'YYYY-MM-DD HH:mm').fromNow();
  }
}
