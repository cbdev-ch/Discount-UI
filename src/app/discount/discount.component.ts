import {Component, OnInit, ViewChild} from '@angular/core';
import {MainService} from '../main.service';
import {MatSidenav} from '@angular/material/sidenav';
import {DiscountService} from '../discount.service';
import {Product} from '../product/product.model';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {

  @ViewChild(MatSidenav)
  navBar: MatSidenav;

  categories: string[];

  products: Product[];

  constructor(public readonly mainService: MainService, private readonly discountService: DiscountService) {

    this.discountService.getCategories().subscribe((data) => {
      this.categories = data;
      this.navBar.toggle();
    });

  }

  ngOnInit(): void {

    this.mainService.navBarToggle.subscribe(() => {
      this.navBar.toggle();
    });

  }

  onCategory(category: string){
    this.discountService.getProducts(category).subscribe((data) => {
      this.products = data;
    });
  }

}
