import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ProductCardComponent } from '../../common/product-card/product-card.component';
import { FilterTabsComponent } from '../../common/filter-tabs/filter-tabs.component';
import { SelectOption } from '../../common/filter-tabs/types';
import { signal } from '@angular/core';
import { Product } from '../../common/product-card/model';

@Component({
  selector: 'app-lists',
  imports: [
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    ProductCardComponent,
    FilterTabsComponent,
  ],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListsComponent {
  public options = [
    { id: 1, label: 'All' },
    { id: 2, label: 'Oil' },
    { id: 3, label: 'Sugar' },
  ];

  public products: Product[] = [
    {
      id: 1,
      imageUrl:
        'https://testing-sary.imgix.net/product/package/2023/10/33_rgm2qxV.jpg',
      title: 'Al Osra Sugar',
      description: 'Soft White',
      sku: 'OSR-SUG-WH-01000GM-020',
      price: 84.92,
      seller: 'Mohamed Rasheed',
      unitPrice: 4.25,
    },
    {
      id: 1,
      imageUrl:
        'https://testing-sary.imgix.net/product/package/2022/05/PFT-SPG-OG-00450GM-024_1_80We03z.jpg',
      title: 'Al Osra Sugar',
      description: 'Soft White',
      sku: 'OSR-SUG-WH-01000GM-020',
      price: 84.92,
      seller: 'Mohamed Rasheed',
      unitPrice: 4.25,
    },
    {
      id: 1,
      imageUrl:
        'https://testing-sary.imgix.net/product/package/2023/12/sasatablesalt750g_U8vlpeL.pn',
      title: 'Al Osra Sugar',
      description: 'Soft White',
      sku: 'OSR-SUG-WH-01000GM-020',
      price: 84.92,
      seller: 'Mohamed Rasheed',
      unitPrice: 4.25,
    },
    {
      id: 1,
      imageUrl:
        'https://testing-sary.imgix.net/product/package/2022/9/BIRMOGCL00250ML00024_SnJKFyp',
      title: 'Al Osra Sugar',
      description: 'Soft White',
      sku: 'OSR-SUG-WH-01000GM-020',
      price: 84.92,
      seller: 'Mohamed Rasheed',
      unitPrice: 4.25,
    },
    {
      id: 1,
      imageUrl:
        'https://testing-sary.imgix.net/product/package/2024/4/image12.png',
      title: 'Al Osra Sugar',
      description: 'Soft White',
      sku: 'OSR-SUG-WH-01000GM-020',
      price: 84.92,
      seller: 'Mohamed Rasheed',
      unitPrice: 4.25,
    },
  ];

  public selectedOption = signal<SelectOption>(this.options[0]);

  public handleSelectOption(option: SelectOption) {
    this.selectedOption.set(option);
  }
}
