import { ClientesService } from './../../services/clientes.service';
import { map } from 'rxjs/operators';
import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogClienteComponent } from './dialog-cliente/dialog-cliente.component';


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
private ClientesService : ClientesService,
private dialog: MatDialog

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

abrirDialog(): void {

  this.dialog.open(DialogClienteComponent, {

    width: '400px',
    maxWidth: '95vw',

    autoFocus: false,

    data: {
      modo: 'adicionar'
    }

  });

}

}
