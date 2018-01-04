import { Component, OnInit, ViewChild } from '@angular/core';
import { MdcLinearProgress } from '@angular-mdc/web';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('uiProgress') uiProgress: MdcLinearProgress;
  @ViewChild('frontEndProgress') frontEndProgress: MdcLinearProgress;
  @ViewChild('backEndProgress') backEndProgress: MdcLinearProgress;

  constructor() { }

  ngOnInit() {
    this.uiProgress.indeterminate = false;
    this.frontEndProgress.indeterminate = false;
    this.backEndProgress.indeterminate = false;

    this.uiProgress.setProgress(0.6);
    this.frontEndProgress.setProgress(0.8);
    this.backEndProgress.setProgress(0.7);
  }

}
