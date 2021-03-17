import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  constructor(public svc:DeseosService, public router:Router) { }

  ngOnInit() {}

  listaSeleccionada(lista: Lista){
    return this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
  }

}
