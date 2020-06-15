import { Component, Input } from '@angular/core';

@Component({
  selector: 'ma-page-next',
  templateUrl: './page-next.component.html'
})
export class PageNextComponent{

  @Input() disabled: boolean;

}
