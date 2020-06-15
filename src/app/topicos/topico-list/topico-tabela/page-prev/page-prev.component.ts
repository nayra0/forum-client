import { Component, Input } from '@angular/core';

@Component({
  selector: 'ma-page-prev',
  templateUrl: './page-prev.component.html'
})
export class PagePrevComponent{

  @Input() disabled: boolean;


}
