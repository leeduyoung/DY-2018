import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  deviceSize: any;

  constructor() { }

  getDeviceSize() {
    return this.deviceSize;
  }
  setDeviceSize(deviceSize) {
    this.deviceSize = deviceSize;
  }
}
