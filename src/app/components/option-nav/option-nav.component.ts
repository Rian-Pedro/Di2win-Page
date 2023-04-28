import { Component, Input } from '@angular/core';
import { option } from 'src/app/option';

@Component({
  selector: 'app-option-nav',
  templateUrl: './option-nav.component.html',
  styleUrls: ['./option-nav.component.css']
})
export class OptionNavComponent {
  show: Boolean = true;

  @Input() name: string = '';
  @Input() title: string = '';
  @Input() options: Array<option> = [];

  ngOnInit() {
  }

  openNav() {
    let option: HTMLDivElement = document.querySelector(`.${this.name}`) as HTMLDivElement;
    let arrow: HTMLImageElement = document.querySelector(`.arrow-${this.name}`) as HTMLImageElement;
    let list = []
    for(let i = 0; i < Array.from(document.querySelectorAll('.drop')).length; i++){
      list.push({
        drop: Array.from(document.querySelectorAll('.drop'))[i],
        arrow: Array.from(document.querySelectorAll('.arrow') as NodeListOf<HTMLElement>)[i]
      });
    }

    console.log(option.classList.contains('invisible'))

    if(!option.classList.contains('visible')) {
      for(let i of list) {
        if(i.drop.classList.contains('visible')){
          this.closeNav(i.drop, i.arrow);
        }
      }

      if(option.classList.contains('close')) {
        option.classList.replace('close', 'visible');
      } else {
        option.classList.replace('invisible', 'visible');
      }

      arrow.style.transform = 'rotate(90deg)';
    } else {
      this.closeNav(option, arrow);
    }

    // this.show = !this.show;
  }

  closeNav(option: Element, arrow: HTMLElement) {
      option.classList.replace('visible', 'invisible');
      arrow.style.transform = 'rotate(0deg)';
  }
}
