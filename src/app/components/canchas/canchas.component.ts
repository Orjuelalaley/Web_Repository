import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cancha } from '../canchas/canchas.model';

@Component({
  selector: 'app-canchas',
  templateUrl: './canchas.component.html',
  styleUrls: ['./canchas.component.css']
})

export class CanchasComponent {
  img = './assets/images/logo.png';
  cancha1 = './assets/images/canchas/1.jpg';
  cancha2 = './assets/images/canchas/2.jpg';
  cancha3 = './assets/images/canchas/3.jpg';
  cancha4 = './assets/images/canchas/4.jpg';
  Soccer_field = './assets/images/Soccer_field_icon.png';

  canchas: Cancha[] = [
    {
      price: 10000,
      info: 'Cancha de fútbol 5',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
      nombre: 'Cancha 1',
      imagen: this.cancha1
    },
    {
      price: 10000,
      info: 'Cancha de fútbol 5',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
      nombre: 'Cancha 2',
      imagen: this.cancha2
    },
    {
      price: 10000,
      info: 'Cancha de fútbol 5',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
      nombre: 'Cancha 3',
      imagen: this.cancha3
    },
    {
      price: 10000,
      info: 'Cancha de fútbol 5',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
      nombre: 'Cancha 4',
      imagen: this.cancha4
    },
    {
      price: 10000,
      info: 'Cancha de fútbol 5',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
      nombre: 'Cancha 5',
      imagen: this.cancha2
    },
    {
      price: 10000,
      info: 'Cancha de fútbol 5',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
      nombre: 'Cancha 6',
      imagen: this.cancha3
    },]

  constructor(private router:Router) { }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navegar(web_page : String ):void {
    this.router.navigate([web_page]);
  }
}
