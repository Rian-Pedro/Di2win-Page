import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent {

  valor: String = '-100%';
  @Input() telas: Array<{ title: string, url: String, text: String }> = [];

  intervalo: any;
  num: number = 1;

  async ngOnInit() {

    let containerCarrossel = await document.querySelector('.container-carrossel');
    let primeiroBotao: HTMLElement = containerCarrossel?.querySelector('button') as HTMLElement;

    primeiroBotao.classList.add('btn-active');

    let listaBtn: Array<HTMLElement> = Array.from(document.querySelector('.container-btn-carrossel')?.querySelectorAll('button') as NodeListOf<HTMLElement>);

    let listaCarrossel: Array<HTMLElement> = Array.from(document.querySelector('.carrossel')?.querySelectorAll('.caixa') as NodeListOf<HTMLElement>);

    let carrossel: HTMLElement = document.querySelector('.carrossel') as HTMLElement;

    this.intervalo = this.setSlide(listaCarrossel, listaBtn, carrossel);


  }

  setSlide(listaCarrossel: Array<HTMLElement>, listaBtn: Array<HTMLElement>, carrossel: HTMLElement) {
    return setInterval(() => {
      if(this.num == listaCarrossel.length) {
        this.num = 0;
        carrossel.style.left = '-0%'
      }
      console.log(this.num)
      carrossel.style.left = `-${this.num * 100}%`
      for(let btn of listaBtn) {
        if(btn.classList.contains('btn-active')) {
          btn.classList.replace('btn-active', 'btn-disable');
        }
      }

      listaBtn[this.num].classList.add('btn-active');

      this.num += 1;
    }, 30000);
  }

  slide(te: any, event: Event) {
    console.log(document.querySelector('.carrossel'))
    let carrossel: HTMLElement = document.querySelector('.carrossel') as HTMLElement;
    let el: HTMLElement = event.target as HTMLElement;
    let listaBtn: NodeListOf<HTMLElement> = document.querySelectorAll(`.${el.classList[0]}`);

    for(let btn of Array.from(listaBtn)) {
      if(btn.classList.contains('btn-active')) {
        btn.classList.remove('btn-active');
      }
    }

    el.classList.add('btn-active');

    for(let i in this.telas) {
      if(this.telas[i] == te){
        carrossel.style.left = `-${Number(i)*100}%`;
        this.num = Number(i);
        clearInterval(this.intervalo);
        this.intervalo = this.setSlide(Array.from(carrossel.querySelectorAll('.caixa') as NodeListOf<HTMLElement>), Array.from(listaBtn), carrossel);
      }
    }
  }

}
