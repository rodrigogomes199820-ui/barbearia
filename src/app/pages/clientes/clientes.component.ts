import { ClientesService } from './../../services/clientes.service';
import { map } from 'rxjs/operators';
import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
dataSource: any[] = [] ;
displayedColumns: string[] = [
  'nome',
  'email',
  'telefone',
  'acoes'
];

constructor(
private ClientesService : ClientesService

){

}
ngOnInit(): void{
   this.loadCliente()
}

loadCliente(): void {

  this.ClientesService.getClientes()
    .pipe(
      map((clientes) => {
        return clientes.map((cliente) => {
          return {
            id: cliente.id,
            nome: cliente.nome,
            email: cliente.email,
            telefone: cliente.telefone
          };

        });

      })

    )
    .subscribe((clientes) => {
      this.dataSource = clientes;

    });

}

}
