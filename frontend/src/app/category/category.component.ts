import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreListingComponent } from '../store-listing/store-listing.component';
import { StoreListing } from '../store-listing';

@Component({
  selector: 'app-category',
  imports: [CommonModule, StoreListingComponent],
  template: `
    <section class="search">
      <form>
        <input type="text" placeholder="Filter by store">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="content">
    <section class="results">
      <app-store-listing *ngFor="let storeListing of storeListingArray" [storeListing]="storeListing" />
    </section>
    </section>
  `,
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  storeListingArray: StoreListing[] = [
    {
      "id": 1,
      "name": "Groceries",
      "itemCount": 3,
      "photo": "grocery.png",
    },
    {
      "id": 2,
      "name": "Target",
      "itemCount": 1,
      "photo": "target.png",
    },
    {
      "id": 3,
      "name": "Costco",
      "itemCount": 2,
      "photo": "costco.png",
    },
    {
      "id": 4,
      "name": "Hardware",
      "itemCount": 0,
      "photo": "hardware.png",
    }
  ];
}
