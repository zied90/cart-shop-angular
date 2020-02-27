import {Component, OnInit} from '@angular/core';
import {MainService} from "./main.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shoping-cart-angular';
  products: any = [];

  constructor(private productsService: MainService) {
  }

  ngOnInit() {
    this.productsService.getProducts().subscribe(data => this.products = data);

  }

}
