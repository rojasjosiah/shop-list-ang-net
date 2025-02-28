import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../store.service';
import { StoreListing } from '../store-listing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  imports: [ReactiveFormsModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  storeService: StoreService = inject(StoreService);
  storeListing: StoreListing | undefined;
  addItemForm = new FormGroup({
    itemName: new FormControl(''),
    itemAmount: new FormControl(''),
    itemMeasureUnit: new FormControl,
  });

  constructor() {
    const storeListingId = Number(this.route.snapshot.params["id"]);
    this.storeService.getStoreListingById(storeListingId).then(storeListing => {
      this.storeListing = storeListing;
    })
  }

  submitItem() {
    this.storeService.submitItem(
      this.addItemForm.value.itemName ?? '',
      this.addItemForm.value.itemAmount ?? '',
      this.addItemForm.value.itemMeasureUnit ?? '',
    )
  }
}
