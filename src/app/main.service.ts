import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  NavBarToggle = new EventEmitter<boolean>();

  constructor() { }
}
