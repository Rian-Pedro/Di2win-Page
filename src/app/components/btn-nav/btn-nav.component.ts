import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-nav',
  templateUrl: './btn-nav.component.html',
  styleUrls: ['./btn-nav.component.css']
})
export class BtnNavComponent {

  @Input() title: string = '';

  @Output() changeOptions: EventEmitter<{name: string}> = new EventEmitter();

  handleOpt(teste: MouseEvent) {
    let allP: NodeListOf<HTMLElement> = document.querySelectorAll('.titleOpt') as NodeListOf<HTMLElement>;
    for(let i of Array.from(allP)) {
      i.classList.remove('enableOpt');

      if(teste.target == i) {
        i.classList.add('enableOpt');
      }
    }

    this.changeOptions.emit({name: this.title});
  }
}
