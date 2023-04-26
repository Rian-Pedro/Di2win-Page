import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-nav',
  templateUrl: './btn-nav.component.html',
  styleUrls: ['./btn-nav.component.css']
})
export class BtnNavComponent {
  @Input() title: string = '';
}
