import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users() {
    return [
      { name: 'abc', address: 'dhk', phone: '018', accounts: ['facebook', 'gmail', 'yahoo'] },
      { name: 'def', address: 'ctg', phone: '017', accounts: ['facebook', 'gmail', 'yahoo'] },
      { name: 'ghi', address: 'rhj', phone: '016', accounts: ['facebook', 'gmail', 'yahoo'] },
      { name: 'jkl', address: 'khu', phone: '015', accounts: ['facebook', 'gmail', 'yahoo'] },
    ]
  }
}
