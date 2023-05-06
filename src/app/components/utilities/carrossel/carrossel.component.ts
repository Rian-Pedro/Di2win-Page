import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent {

  valor: String = '-100%';
  @Input() telas: Array<{ title: string, url: String, text: String }> = [];

  async ngOnInit() {

    let containerCarrossel = await document.querySelector('.container-carrossel');
    let primeiroBotao: HTMLElement = containerCarrossel?.querySelector('button') as HTMLElement;

    primeiroBotao.classList.add('btn-active');

  }

  slide(te: any, event: Event) {
    let carrossel: HTMLElement = document.querySelector('.carrossel') as HTMLElement;
    let el: HTMLElement = event.target as HTMLElement;
    let listaBtn: NodeListOf<HTMLButtonElement> = document.querySelectorAll(`.${el.classList[0]}`);

    for(let btn of Array.from(listaBtn)) {
      if(btn.classList.contains('btn-active')) {
        btn.classList.remove('btn-active');
      }
    }

    el.classList.add('btn-active');

    for(let i in this.telas) {
      if(this.telas[i] == te){
        carrossel.style.left = `-${Number(i)*100}%`
      }
    }
  }

}
