import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-nav',
  templateUrl: './btn-nav.component.html',
  styleUrls: ['./btn-nav.component.css']
})
export class BtnNavComponent {

  @Input() title: string = '';

  @Output() changeOptions: EventEmitter<{name: string}> = new EventEmitter();

  handleOpt() {
    this.changeOptions.emit({name: this.title});
  }
}
