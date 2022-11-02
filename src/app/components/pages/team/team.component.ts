import { Component, OnInit } from '@angular/core';
import { Empleado } from './team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  [x: string]: any;
  titulo = 'Listado de empleados';
  empleados:Empleado[]=[
    new Empleado("juan","Díaz","Presidente",7500 ),
    new Empleado("Pedro","Perez","Secretario",2500 ),
    new Empleado("Alvaro","Martín","Consejero",1500 ),
  ];
  cards = [
    {
      title: 'Austin Evon',
      subtitle: 'Co-manager associated',
      description: 'Lorem ipsum dolor sit ame consectur adipisicingsedo eiusmod tempor',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Taylor Anderson',
      subtitle: 'Business consultant',
      description: 'Lorem ipsum dolor sit ame consectur adipisicingsedo eiusmod tempor',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Sarah Taylor',
      subtitle: 'Co-Founder',
      description: 'Lorem ipsum dolor sit ame consectur adipisicingsedo eiusmod tempor',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Jorgia Klev',
      subtitle: 'Business Manger',
      description: 'Lorem ipsum dolor sit ame consectur adipisicingsedo eiusmod tempor',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
