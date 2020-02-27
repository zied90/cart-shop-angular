import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public products = new Subject();
  public cartItems = [];

  constructor() {
  }

  getProducts(): Observable<any> {
    return this.products.asObservable();
  }

  setProducts(products) {
    this.cartItems.push(...products);
    this.products.next(products);
  }

  addProductToCart(product: any) {
    this.cartItems.push(product);
    this.products.next(this.cartItems);
  }

  getTotalPrice() {
    let total = 0;
    this.cartItems.map(item => {
      total += item.price;
    });
    return total;
  }

  emptryCart() {
    this.cartItems.length = 0;
    this.products.next(this.cartItems);
  }

  // Remove single product from the cart
  removeProductFromCart(productId) {
    this.cartItems.map((item, index) => {
      if (item.id === productId) {
        this.cartItems.splice(index, 1);
      }
    });

    // Update Observable value
    this.products.next(this.cartItems);
  }

}
