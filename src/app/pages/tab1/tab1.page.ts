import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public deseosService:DeseosService, private router:Router) {

  }

  agregarLista(){
    // this.router.navigateByUrl('/agregar');
    this.router.navigate(['tabs/tab1/agregar']);
  }

}
