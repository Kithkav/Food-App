import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imagePaths: {path: string, name:string}[] = [
    {path: '../../assets/i1.jpg', name: 'Pizza'},
    {path: '../../assets/i2.jpg', name: 'Burger'},
    {path: '../../assets/i3.jpg', name: 'Vegetable soup'},
    {path: '../../assets/i4.jpg', name: 'Chicken'},
    {path: '../../assets/i5.jpg', name: 'Sea food rice'},
    {path: '../../assets/i6.jpg', name: 'Biriyani'},
    {path: '../../assets/i7.jpg', name: 'HotDog'},
    {path: '../../assets/i8.jpg', name: 'Noodles'},

  ];
}
