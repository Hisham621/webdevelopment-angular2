import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "./ui/navbar/navbar.component";
import { HomeComponent } from "./pages/home/home.component";
import { CorouselComponent } from "./ui/corousel/corousel.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HomeComponent, CorouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce';

  ngOnInit(): void {
    initFlowbite();
  }


}