import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private items = [
    {id:1, name:"Bread", price: 5.99},
    {id:2, name:"Cheese", price: 16.99},
    {id:3, name:"Ham", price: 9.99},
    {id:4, name:"Egg", price: 4.99},
    {id:5, name:"Butter", price: 7.99},
  ];
    constructor() { }
  
    getItems(){
      return this.items;
    }
  }