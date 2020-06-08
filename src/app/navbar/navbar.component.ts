import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MainService} from '../main.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isMenuCollapsed = true;

  constructor(public router: Router, private readonly mainService: MainService) { }

  ngOnInit(): void {
  }

  updateUI(): void{
    this.mainService.navBarToggle.emit();
    this.mainService.showClass.next(!this.mainService.showClass.value);
  }

}
