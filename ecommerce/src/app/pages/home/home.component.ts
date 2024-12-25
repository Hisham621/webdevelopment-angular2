import { Component, Input } from '@angular/core';
import { NavbarComponent } from "../../ui/navbar/navbar.component";
import { CardsComponent } from "../../ui/cards/cards.component";
import { ApiService } from '../../api.service';
import { RouterLink } from '@angular/router';
import { CorouselComponent } from "../../ui/corousel/corousel.component";
@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CardsComponent, RouterLink, CorouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
product: any;
  constructor(private api: ApiService) { }


  data: any
  ngOnInit() {
    this.api.getProducts().subscribe((res:any) => {
      this.data = res.products;
      console.log(this.data);
      
    });
  }

}
