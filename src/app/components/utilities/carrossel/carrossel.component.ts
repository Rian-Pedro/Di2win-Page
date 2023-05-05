import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent {

  valor: String = '-100%';
  telas: Array<any> = [
    {color: 'red'},
    {color: 'blue'},
    {color: 'yellow'},
    {color: 'brown'}
  ]

  teste2() {
    console.log('test')
  }

  teste(te: any, event: Event) {
    let carrossel: HTMLElement = document.querySelector('.carrossel') as HTMLElement;
    let el: HTMLElement = event.target as HTMLElement;
    let listaBtn: NodeListOf<HTMLButtonElement> = document.querySelectorAll(`.${el.classList[0]}`);
    for(let btn of Array.from(listaBtn)) {
      if(btn.classList.contains('btn-active')) {
        btn.classList.remove('btn-active');
      }
    }
    el.classList.add('btn-active')
    for(let i in this.telas) {
      if(this.telas[i] == te){
        carrossel.style.left = `-${Number(i)*100}%`
      }
    }
  }

}
