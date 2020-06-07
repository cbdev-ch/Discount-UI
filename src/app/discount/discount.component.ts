import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {MainService} from '../main.service';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {

  @Input()
  status: boolean;

  @ViewChild(MatSidenav)
  Nav: MatSidenav;

  constructor(private readonly mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.NavBarToggle.subscribe(() => {
      this.Nav.toggle();
    });
  }

}
