import { Platform } from '@angular/cdk/platform';
import { Component } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {

  constructor(private platform: Platform) { }

  public startDate = moment([2022, 9, 28])
  public minDate = moment([2022, 7, 28])
  public maxDate = moment([2022, 11, 28])

  get isToucherDevice() {
    return this.platform.ANDROID || this.platform.IOS
  }
}
