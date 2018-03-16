import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from '../provider/data/data.service';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  deviceSize: any = {};

  constructor(private dataService: DataService) {
    console.log('개발자시군요! 반갑습니다. :)');
  }

  ngOnInit() {
    this.dataService.setDeviceSize({ outerWidth: window.outerWidth, outerHeight: window.outerHeight, innerWidth: window.innerWidth, innerHeight: window.innerHeight });
    this.deviceSize.innerHeight = window.innerHeight;
    this.setTypedAnimation();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.deviceSize.innerHeight = event.target.innerHeight;
    this.deviceSize.innerWidth = event.target.innerWidth;
  }

  setTypedAnimation() {
    let typed = new Typed(".inner", {
      strings: ["I want to make things <br/> that", "I want to make things <br/> that make a difference", "I want to make things <br/> that make a difference."],
      smartBackspace: true,
      typeSpeed: 60,
      startDelay: 800,
      backSpeed: 30,
      loop: false,
      loopCount: Infinity,
    });
  }
}
