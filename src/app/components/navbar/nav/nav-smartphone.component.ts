import { Component } from '@angular/core';
import { Menu } from 'src/app/menu';

@Component({
  selector: 'app-nav-smartphone',
  templateUrl: './nav-smartphone.component.html',
  styleUrls: ['./nav-smartphone.component.css']
})
export class NavComponent {

  show: Boolean = true;

  dropDownMenu() {
    if(this.show) {
      let menu: HTMLDivElement = document.querySelector(".dropdown") as HTMLDivElement;
      if(menu.classList.contains('close')){
        menu.classList.remove('close');
      } else {
        menu.classList.remove('invisible');
      }
      menu.classList.add('visible');
      this.show = !this.show;
    } else {
      this.closeDropDown();
    }
  }

  teste(option: any) {
    let optionsNav: NodeListOf<HTMLElement> = document.querySelectorAll('.option-nav') as NodeListOf<HTMLElement>;
    for(let opt of Array.from(optionsNav)) {
      if(opt.classList.contains('visible')) {
        opt.style.display = 'none';
      }
    }
    let div: HTMLElement = document.querySelector(`.${option.name.replace(/[^a-zA-Z0-9]/g, '')}`) as HTMLElement;
    div.classList.replace('hidden', 'visible');
    div.style.display = 'inline';
  }

  closeDropDown() {
    let menu: HTMLDivElement = document.querySelector(".dropdown") as HTMLDivElement;
    menu.classList.replace('visible', 'invisible');
    this.show = !this.show;
  }

}
