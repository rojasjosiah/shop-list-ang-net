import { Component, Input } from '@angular/core';
import { StoreListing } from '../store-listing';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-store-listing',
  imports: [RouterModule],
  template: `
    <section class="store-type">
      <img class="store-type-photo" [src]="storeListing.photo" alt="Exterior photo of {{storeListing.name}}">
      <h2 class="store-type-heading">{{ storeListing.name }}</h2>
      <p class="store-type-item-count">Total Items: {{ storeListing.itemCount }}</p>
      <a [routerLink]="['/list', storeListing.id]">Go to List</a>
    </section>
  `,
  styleUrl: './store-listing.component.css'
})
export class StoreListingComponent {
  @Input() storeListing!: StoreListing;
}
