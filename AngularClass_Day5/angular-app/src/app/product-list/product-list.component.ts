import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    { title: 'M1911', description: 'The Colt M1911 (also known as 1911, Colt 1911 or Colt Government in the case of Colt-produced models) is a single-action, recoil-operated, semi-automatic pistol chambered for the .45 ACP cartridge.' },
    { title: 'M&P Shield EZ', description: 'The ultra-popular line M&P® Shield™ line up now offers a model with ported barrel to reduce muzzle flip for rapid target re-engagement.' },
    { title: 'XD-S MOD.2', description: 'The XD-S Mod.2® OSP™ 3.3" Single Stack 9mm pistol is the optics-ready, deep-cover defensive pistol that goes anywhere.' }
  ];

}
