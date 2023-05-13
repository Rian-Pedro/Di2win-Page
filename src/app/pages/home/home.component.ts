import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  advantageList: Array<{num: String, title: String, text: String}> = [
    {num: '01',
     title: 'Lorem Ipsum',
     text: 'Incididunt veniam sint et ea aute aliquip enim incididunt est qui cillum. Aute commodo elit voluptate ad nulla enim enim eiusmod incididunt aliqua consectetur cupidatat ut. In aliqua minim ad pariatur sunt nulla eiusmod dolor anim veniam enim cupidatat est veniam. Quis occaecat aliqua do ullamco fugiat occaecat magna nisi.'},
     {num: '01',
     title: 'Lorem Ipsum',
     text: 'Incididunt veniam sint et ea aute aliquip enim incididunt est qui cillum. Aute commodo elit voluptate ad nulla enim enim eiusmod incididunt aliqua consectetur cupidatat ut. In aliqua minim ad pariatur sunt nulla eiusmod dolor anim veniam enim cupidatat est veniam. Quis occaecat aliqua do ullamco fugiat occaecat magna nisi.'},
     {num: '01',
     title: 'Lorem Ipsum',
     text: 'Incididunt veniam sint et ea aute aliquip enim incididunt est qui cillum. Aute commodo elit voluptate ad nulla enim enim eiusmod incididunt aliqua consectetur cupidatat ut. In aliqua minim ad pariatur sunt nulla eiusmod dolor anim veniam enim cupidatat est veniam. Quis occaecat aliqua do ullamco fugiat occaecat magna nisi.'}
  ]

}
