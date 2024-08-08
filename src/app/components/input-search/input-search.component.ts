import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { IconTypes } from '../data-access';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent {
  resetValue = '';
  isDropdownActive = false;
  filteredList: Array<Recipe> = [];
  @Input() list: Array<Recipe> = [];
  @Input() selectedItem: Recipe | null = null;
  @Input() placeholderText = '';
  @Input() inputValue = '';
  @Output() handleSelectItem = new EventEmitter<Recipe>();

  ngOnInit() {
    this.resetValue = this.inputValue;
  }

  public get IconTypes() {
    return IconTypes;
  }

  search(event: KeyboardEvent) {
    const value = (event.target as HTMLInputElement).value;
    this.inputValue = value;
    this.isDropdownActive = true;

    this.filteredList.length = 0;
    this.filterSearch(value);
  }

  filterSearch(value: string) {
    this.list.forEach((item) => {
      const upper = item.name?.toLocaleUpperCase() || '';
      const term = value.toLocaleUpperCase() || '';
      if (upper.includes(term)) {
        this.filteredList.push(item);
      }
    });
  }

  clearSearch() {
    this.resetValue = this.inputValue;
    this.inputValue = '';
    this.isDropdownActive = true;
    this.filterSearch('');

    const inputSearchElement = document.getElementById('input-search');
    if (inputSearchElement) {
      inputSearchElement.focus();
    }
  }

  closeDropdownAndResetValue() {
    this.isDropdownActive = false;
    this.inputValue = this.resetValue;

    const selectedItem = this.list.filter(item => item.name === this.inputValue);
    if (selectedItem.length === 1) {
      this.handleSelectItem.emit(selectedItem[0]);
    }
  }

  selectItem(item: Recipe) {
    this.resetValue = item.name;
    this.handleSelectItem.emit(item);
    this.isDropdownActive = false;
  }
}
