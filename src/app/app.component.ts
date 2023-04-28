import { Component } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'extrai-dados';

  show: Boolean = true;

  menu: Array<Menu> = [
    { name: 'soluções', show: false },
    { name: 'produtos', show: false }
  ];

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
    for(let opt of this.menu) {
      if(opt.name == option.name){
        opt.show = true;
        let div: HTMLElement = document.querySelector('.hidden') as HTMLElement;
        div.style.display = 'inline';
      }
    }
  }

  closeDropDown() {
    let menu: HTMLDivElement = document.querySelector(".dropdown") as HTMLDivElement;
    menu.classList.replace('visible', 'invisible');
    this.show = !this.show;
  }

}
