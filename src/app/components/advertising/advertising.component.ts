import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.scss'],
})
export class AdvertisingComponent implements OnInit {
 
  option = {
    slidesPerView: 1.3,
    autoplay: {delay:2000}
  };

  constructor() { }

  ngOnInit() {}

}
