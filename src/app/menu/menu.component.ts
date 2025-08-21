import { Component, OnInit } from '@angular/core';
import { Menu } from '../../app/types/menu';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-menu',
  styleUrl: './menu.component.scss',
  templateUrl: './menu.component.html'
})


export class MenuComponent implements OnInit {


  menu: Menu[] = [
    {
      imagem: '',
      label: 'Home',
      rota: '',
    },
    {
      imagem: '',
      label: 'A Seita',
      rota: 'triologia-a-seita'
    },
    {
      imagem: '',
      label: 'sobre',
      rota: 'sobre'
    }
  ]

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }


  hover(): void {
    console.log('hover')
  }

  navegar(rota: string): void {
    this.router.navigate([rota])
  }
}
