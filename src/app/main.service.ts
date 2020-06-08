import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  navBarToggle = new EventEmitter();
  showClass = new BehaviorSubject<boolean>(true);

  constructor() { }

}
