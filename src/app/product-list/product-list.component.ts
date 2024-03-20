import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  // products = [...products];

  products = [
    {
      name: 'iPhone',
      stock: 30,
      description: 'サンプルテキスト',
    },
    {
      name: 'iPad',
      stock: 12,
      description: 'タブレット',
    },
  ];

  share() {
    window.alert('The product has been shared!');
  }

  notify() {
    window.alert('この商品を入荷したら通知します。');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
