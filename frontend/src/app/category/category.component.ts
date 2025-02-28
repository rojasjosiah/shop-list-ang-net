import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreListingComponent } from '../store-listing/store-listing.component';
import { StoreListing } from '../store-listing';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-category',
  imports: [CommonModule, StoreListingComponent],
  template: `
    <section class="search">
      <form>
        <input type="text" placeholder="Filter by store" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="content">
    <section class="results">
      <app-store-listing *ngFor="let storeListing of filteredStoreListingArray" [storeListing]="storeListing" />
    </section>
    </section>
  `,
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  storeListingArray: StoreListing[] = [];
  storeService: StoreService = inject(StoreService);
  filteredStoreListingArray: StoreListing[] = [];

  filterResults(text: string) {
    if (!text) this.filteredStoreListingArray = this.storeListingArray;

    this.filteredStoreListingArray = this.storeListingArray.filter(
      storeListing => storeListing?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  constructor() {
    this.storeService.getAllStoreListings().then((storeListingArray: StoreListing[]) => {
      this.storeListingArray = storeListingArray;
      this.filteredStoreListingArray = storeListingArray;
    })
  }
}
