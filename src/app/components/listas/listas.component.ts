import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada=true;
  constructor(public svc:DeseosService, public router:Router, private alertCtrl:AlertController) { }

  ngOnInit() {}

  listaSeleccionada(lista: Lista){
    if (this.terminada){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    }
    else this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
  }

  borrarLista(lista: Lista){
    this.svc.borrarLista(lista);
    console.log("Borrando "+lista.titulo+"...");
  }

  async renombrarLista(lista:Lista){
    const alert= await this.alertCtrl.create({
      header: 'Renombrar lista',
      inputs: [
        {
          name:'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista',
          value: lista.titulo
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Cancelar");
          }
        },
        {
          text: 'Renombrar',
          handler: (data) => {
            console.log(data);
            if (data.titulo.length ===0){
              return;
            }
            lista.titulo = data.titulo;
            this.svc.guardarStorage();
          }
        }
      ]
    });
    alert.present();
  }

}
