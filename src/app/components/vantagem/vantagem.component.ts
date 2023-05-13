import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vantagem',
  templateUrl: './vantagem.component.html',
  styleUrls: ['./vantagem.component.css']
})
export class VantagemComponent {

  @Input() num: String = '';
  @Input() title: String = '';
  @Input() text: String = '';

}
