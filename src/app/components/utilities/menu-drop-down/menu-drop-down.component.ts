import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-drop-down',
  templateUrl: './menu-drop-down.component.html',
  styleUrls: ['./menu-drop-down.component.css']
})
export class MenuDropDownComponent {

  show: Boolean = true;

  @Input() linkList: Array<{ title: string, link: string, router: string }> = [];

  ngOnInit() {
    let menu: HTMLDivElement = document.querySelector(".dropdown") as HTMLDivElement;
    document.addEventListener('click', (e) => {

      if(e.target !== menu &&
        e.target !== document.querySelector(".dots") &&
        !menu.contains(e.target as HTMLElement)) {
        this.closeDropDown(menu);
      }
    })
  }

  dropDownMenu() {
    let menu: HTMLDivElement = document.querySelector(".dropdown") as HTMLDivElement;
    if(menu.classList.contains('close') || menu.classList.contains('invisible')) {
      if(menu.classList.contains('close')){
        menu.classList.remove('close');
      } else {
        menu.classList.remove('invisible');
      }
      menu.classList.add('visible');
    } else {
      this.closeDropDown(menu);
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

  closeDropDown(menu: any) {
    menu.classList.replace('visible', 'invisible');
    this.show = true;
  }

}
