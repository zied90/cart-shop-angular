import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../shared.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private cartProductCount = 0

  constructor(private mySharedService: SharedService) {
  }

  ngOnInit() {
    this.mySharedService.getProducts().subscribe(data => {
      this.cartProductCount = data.length;
    });
  }

}
