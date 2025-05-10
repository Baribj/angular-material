import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { SelectOption } from './types';

/**
 * This reusable component design is wrong and limiting. It gives no freedom to control the individual option shape.
 * Instead, we should have two components: filter-tab-group and filter-tab.
 * For a quick demo purpose, this will do for now.
 */

@Component({
  selector: 'app-filter-tabs',
  imports: [CommonModule],
  templateUrl: './filter-tabs.component.html',
  styleUrl: './filter-tabs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterTabsComponent {
  @Input() options: SelectOption[] = [];
  @Input() selectedOption?: SelectOption;

  @Output() onSelectOption: EventEmitter<SelectOption> = new EventEmitter();

  public handleSelect(option: SelectOption) {
    this.onSelectOption.emit(option);
  }
}
