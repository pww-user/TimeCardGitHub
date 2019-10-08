import { Component } from '@angular/core';
import { Screen } from 'app/screen';

@Component({
  selector: 'screen-chooseproject-phoneportrait',
  templateUrl: 'chooseproject.html'
})
export class chooseproject_PhonePortrait extends Screen {
  data: any;
  initialGroup = [];

  ngOnInit(): void {
    super.ngOnInit();
    // Logic to run when the screen loads goes here.
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    // Logic to run when the screen unloads goes here.
  }

  onDataLoad(data) {
    if (data.Group) {
      this.initialGroup = data.Group.map(item => Object.assign({}, item));
    }
  }

  search(ev: any) {
    // set val to the value of the searchbar
    let val = ev.target.value;

    // back to initial data.Group values
    this.data.Group = this.initialGroup.map(item => Object.assign({}, item));

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      for (var i = 0; i < this.data.Group.length; i++) {
        let item = this.data.Group[i];
        for (var key in item) {
          if (item[key] && typeof item[key] === 'string' && item[key].toLowerCase().indexOf(val.toLowerCase()) > -1) {
            item.isFiltered = false;
            break;
          }
          item.isFiltered = true;
        }
      }
    } else if (val === '') {
      this.data.Group = this.initialGroup.map(item => Object.assign({}, item));
    }
  }
}
