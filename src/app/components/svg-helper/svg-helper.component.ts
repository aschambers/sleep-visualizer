import { Component, Input } from '@angular/core';
import { IconTypes } from '../data-access';

@Component({
  selector: 'app-svg-helper',
  templateUrl: './svg-helper.component.html',
  styleUrls: ['./svg-helper.component.scss']
})
export class SvgHelperComponent {
  @Input() width = 0;
  @Input() height = 0;
  @Input() fill = 'none';
  @Input() title = '';
  @Input() desc = '';
  @Input() icon = '';
  @Input() class = '';
  
  public get IconTypes() {
    return IconTypes;
  }
}
