import { Component, OnInit } from '@angular/core';
import { AppServices } from '../../../services/app-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers:  [ AppServices ]
})

export class HeaderComponent implements OnInit {

  public poll: any = '';
  public dataSaved: any;

  constructor( private appServices: AppServices) {}

  ngOnInit() {
    this.dataSaved = localStorage.getItem( 'poll' );

    if ( this.dataSaved === null ) {
      this.getData();
    } else {
      this.poll = JSON.parse( this.dataSaved );
    }
  }

  voting( vote: string ) {
    const votesUp = this.poll.votesUp;
    const votesDown = this.poll.votesDown;

    if ( vote === 'up' ) {
      this.poll.votesUp = votesUp + 1;
    } else {
      this.poll.votesDown = votesDown + 1;
    }

    this.saveVotes( this.poll );
  }

  getData() {
    this.appServices.getJSON()
      .subscribe(resp => {
        const polls = resp.filter( ( poll ) => poll.type === 'featured' );
        this.poll = polls[0];
        this.saveVotes( this.poll );
      });
  }

  saveVotes( pollData ) {
    localStorage.setItem( 'poll', JSON.stringify( pollData ) );
  }
}
