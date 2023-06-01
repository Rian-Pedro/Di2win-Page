import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  linksMenu: Array<{ title: string, link: string }> = [
    { title: "dúvidas frequentes", link: "https://google.com" },
    { title: "entrar", link: "https://www.extraidados.com.br/autenticacao/entrar" }
  ]

  title = 'extrai-dados';

  show: Boolean = true;

  menu: Array<{ name: string, show: Boolean }> = [
    { name: 'soluções', show: false },
    { name: 'produtos', show: false }
  ];

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
