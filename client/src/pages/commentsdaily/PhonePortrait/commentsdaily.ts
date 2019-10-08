import { Component } from '@angular/core';
import { Screen } from 'app/screen';

@Component({
  selector: 'screen-commentsdaily-phoneportrait',
  templateUrl: 'commentsdaily.html'
})
export class commentsdaily_PhonePortrait extends Screen {
  private datePosition = 0;
  public data: any;

  ngOnInit(): void {
    super.ngOnInit();
    // Logic to run when the screen loads goes here.
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    // Logic to run when the screen unloads goes here.
  }

  public onDataLoad(data) {
    this.data.shownDefaultDays = this.data.allDefaultDays.slice(1, 6);
    this.data.selectedDate = this.data.allDefaultDays.find(dateObj => {
      return dateObj.dayOfWeek === this.data.selectedDate.dayOfWeek && dateObj.date === this.data.selectedDate.date;
    });
  }

  public goComments(i) {
    let realIndex = i + 1 + this.datePosition;
    this.call('commentsdaily.goComments', {index: realIndex});
  }

  public scrollLeft() {
    if (this.datePosition >= 0) {
      this.datePosition--;
      this.setAllPositions();
    }
  }

  public scrollRight() {
    if (this.datePosition <= 0) {
      this.datePosition++;
      this.setAllPositions();
    }
  }

  private setAllPositions() {
    if (this.datePosition === -1) {
      this.data.shownDefaultDays = this.data.allDefaultDays.slice(0, 5);
    } else if (this.datePosition === 0) {
      this.data.shownDefaultDays = this.data.allDefaultDays.slice(1, 6);
    } else if (this.datePosition === 1) {
      this.data.shownDefaultDays = this.data.allDefaultDays.slice(2);
    }
  }
}
