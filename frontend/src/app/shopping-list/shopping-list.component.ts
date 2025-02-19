import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-list',
  imports: [],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  storeListingId = 0;

  constructor() {
    this.storeListingId = Number(this.route.snapshot.params["id"]);
  }
}
