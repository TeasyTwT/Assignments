import { Component } from '@angular/core';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-items',
  standalone: false,
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  items;
  constructor(private service: ItemsService){
    
    this.items = service.getItems();
    console.log(this.items);
  }
  
  getTotal(): number {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }
  
}
