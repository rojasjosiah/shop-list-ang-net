import { Injectable } from '@angular/core';
import { StoreListing } from './store-listing';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  url = 'http://localhost:3000/locations';

  constructor() { }

  async getAllStoreListings(): Promise<StoreListing[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getStoreListingById(id: number): Promise<StoreListing | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitItem(itemName: string, itemAmount: string, itemMeasureUnit: string) {
    console.log(itemName, itemAmount, itemMeasureUnit)
  }
}
