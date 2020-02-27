import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../shared.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private cartItems;
  private totalAmmount;

  constructor(
    private mySharedService: SharedService
  ) {
  }

  ngOnInit() {
    this.mySharedService.getProducts().subscribe(data => {
      this.cartItems = data;
      this.totalAmmount = this.mySharedService.getTotalPrice();
    });

  }

  emptyCart() {
    this.mySharedService.emptryCart();
  }

  removeItemFromCart(productId) {
    this.mySharedService.removeProductFromCart(productId);
  }
}
