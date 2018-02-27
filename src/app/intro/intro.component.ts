import { Component, OnInit } from '@angular/core';
import { DataService } from '../provider/data/data.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(private dataService: DataService) { 

  }

  ngOnInit() {
    console.log(window);
    this.dataService.setDeviceSize({outerWidth: window.outerWidth, outerHeight: window.outerHeight, innerWidth: innerWidth, innerHeight: innerHeight});
    console.log(this.dataService.getDeviceSize());
  }

}
