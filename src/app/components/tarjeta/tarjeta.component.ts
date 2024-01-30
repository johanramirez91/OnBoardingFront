import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ApiRickMortyService } from 'src/app/services/apiRickMorty.service';

@Component({
  selector: 'tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss'],
})
export class TarjetaComponent implements OnInit {
  @Input() nombrePersonaje = '';
  @Output() descripcion = new EventEmitter<string>();

  private rickMortyService = inject(ApiRickMortyService);

  ngOnInit(): void {
    this.rickMortyService.obtenetPersonajes().subscribe((data) => {
      console.log(data);
    });
  }

  enviarDatos() {
    this.descripcion.emit('Hola le diste click a ' + this.nombrePersonaje);
  }
}
