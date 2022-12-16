import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Goku','Hulk','Vergetta'];
  heroeBorrado: string= '';
  borrarHeroe(){
    
    this.heroeBorrado= this.heroes?.shift() || '';
    
  }
} 
