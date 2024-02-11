import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  newItem: string = '';

  constructor() { }

  addItem() {
    // Add your logic to add item here
    console.log('Item added: ' + this.newItem);
    this.newItem = '';
  }
}
