import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private userSource = new BehaviorSubject({ user: null, key: '' });
  currentUser = this.userSource.asObservable();

  constructor() { }

  changeUser(user: User, key: string) {
    this.userSource.next({ user: user, key: key });
  }
}
