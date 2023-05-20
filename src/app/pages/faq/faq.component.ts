import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {

  teste(event: any) {
    let response: HTMLElement = event.nextElementSibling;
    let img: HTMLImageElement = event.firstElementChild;

    if(response.classList.contains('invisible')) {
      response.classList.replace('invisible', 'visible');
      img.style.transform = 'rotate(90deg)';
    } else {
      response.classList.replace('visible', 'invisible');
      img.style.transform = 'rotate(0deg)';
    }
  }

}
