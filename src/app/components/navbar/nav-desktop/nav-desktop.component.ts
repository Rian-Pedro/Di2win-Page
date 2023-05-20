import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-desktop',
  templateUrl: './nav-desktop.component.html',
  styleUrls: ['./nav-desktop.component.css']
})
export class NavDesktopComponent {
  @Output() event = new EventEmitter();

  linksMenu: Array<{ title: string, link: string }> = [
    { title: "dúvidas frequentes", link: "https://google.com" },
    { title: "entrar", link: "https://www.extraidados.com.br/autenticacao/entrar" }
  ]

  show: Boolean = true;

  dropDownMenu() {
    let menu: HTMLDivElement = document.querySelector(".dropdown") as HTMLDivElement;
    console.log(menu);
    if(menu.classList.contains('invisible') || menu.classList.contains('close')) {
      if(menu.classList.contains('close')){
        console.log('aqui');
        menu.classList.remove('close');
      } else {
        menu.classList.remove('invisible');
      }
      menu.classList.add('visible');
    } else {
      this.closeDropDown();
    }
  }

  openMenu(event: any) {
    let img: HTMLImageElement = event.nextElementSibling as HTMLImageElement;
    let menu: HTMLElement = event.nextElementSibling.nextElementSibling as HTMLElement;
    let dropList: Array<HTMLElement> = Array.from(document.querySelectorAll('li .drop'));


    if(img.style.transform != "rotate(90deg)") {

      dropList.forEach((drop) => {
        drop.classList.replace('visible', 'invisible');
        let image: HTMLElement = drop.previousElementSibling as HTMLElement;
        image.style.transform = "rotate(0deg)";
      });

      img.style.transform = "rotate(90deg)"
      menu.classList.replace('invisible', 'visible');

    } else {

      img.style.transform = "rotate(0deg)"
      menu.classList.replace('visible', 'invisible');

    }
  }

  closeMenu(event: any) {
    let menu: HTMLElement = event as HTMLElement;
    let img: HTMLImageElement = event.previousElementSibling as HTMLImageElement;
    menu.classList.replace('visible', 'invisible');
    img.style.transform = 'rotate(0deg)'
  }

  showOptions(event: any) {
    let el: HTMLElement = event.nextElementSibling;

    if(el.style.display == 'none') {
      el.style.display = 'flex';
    } else {
      el.style.display = 'none';
    }

  }

  closeDropDown() {
    let menu: HTMLDivElement = document.querySelector(".dropdown") as HTMLDivElement;
    menu.classList.replace('visible', 'invisible');
    this.show = !this.show;
  }
}
