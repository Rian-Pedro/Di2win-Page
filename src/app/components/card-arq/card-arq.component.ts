import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-arq',
  templateUrl: './card-arq.component.html',
  styleUrls: ['./card-arq.component.css']
})
export class CardArqComponent {

  @Input() type: String = '';
  @Input() img: String = '';

}
