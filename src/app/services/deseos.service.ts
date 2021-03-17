import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas :Lista[]=[];

  constructor(private alertCtrl:AlertController) {
    // const lista1=new Lista("Recolectar piedras");
    // const lista2=new Lista("Recolectar agua");

    // this.listas.push(lista1, lista2);

    this.cargarStorage();


  }
  crearLista(titulo:string){
    const nuevaLista= new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();

    return nuevaLista.id;
  }

  borrarLista(lista: Lista){
    this.listas=this.listas.filter(listaData=>{
      return listaData.id!== lista.id;
    });
    this.guardarStorage();
  }


  obtenerLista(id:string|number){
    id=Number(id);
    return this.listas.find(listaData=> listaData.id===id);
  }



  guardarStorage(){
    localStorage.setItem('data', JSON.stringify(this.listas));
  }
  cargarStorage(){
    if ( localStorage.getItem('data')) this.listas=JSON.parse(localStorage.getItem('data'));
  }

}
