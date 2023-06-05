import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-smartphone',
  templateUrl: './nav-smartphone.component.html',
  styleUrls: ['./nav-smartphone.component.css']
})
export class NavComponent {

  show: Boolean = true;

  listLinks: Array<{ title: string, link: string, router: string }> = [
    { title: "dúvidas frequentes", link: '', router: '/faq' },
    { title: "feedback", link: '', router: '/feedback' },
    { title: "entrar", link: 'https://www.extraidados.com.br/autenticacao/entrar', router: '' }
  ]

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

  closeDropDown() {
    let menu: HTMLDivElement = document.querySelector(".dropdown") as HTMLDivElement;
    menu.classList.replace('visible', 'invisible');
    this.show = !this.show;
  }

}
