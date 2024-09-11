// src/app/item-list/item-list.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  items = [
    {
      title: 'VGL Brasil Poster',
      description: 'Video Games Live, Rio De Janeiro, Brasil',
      image: 'https://victoriousnerd.com/images/hobbiesinterests/playstation-violin-large.jpg'
    },
    {
      title: 'VGL USA',
      description: 'Video Games Live, New Haven, Connecticut, United States',
      image: 'https://victoriousnerd.com/images/hobbiesinterests/xbox-frenchhorn-large.jpg'
    },
    {
      title: 'VGL Canada',
      description: 'Video Games Live, Edmonton, Canada',
      image: 'https://victoriousnerd.com/images/hobbiesinterests/nintendo-trumpet-large.jpg'
    }
  ];
}
