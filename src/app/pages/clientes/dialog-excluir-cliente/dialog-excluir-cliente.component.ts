import { MensagensService } from './../../../services/mensagens.service';
import { ClientesService } from './../../../services/clientes.service';
import { Component, Inject } from '@angular/core';

import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-excluir-cliente',
  templateUrl: './dialog-excluir-cliente.component.html',
  styleUrls: ['./dialog-excluir-cliente.component.scss']
})
export class DialogExcluirClienteComponent {

  constructor(
private clientesService : ClientesService,
private mensagensService : MensagensService,
 private dialogRef: MatDialogRef<DialogExcluirClienteComponent>,
 @Inject(MAT_DIALOG_DATA)
  public cliente: any
    

  ){}


    

   cancelar(): void {
    this.dialogRef.close();
  }

excluir(): void {

  this.clientesService
    .excluirCliente(this.cliente.id)
    .subscribe({

      next: (item) => {

        this.mensagensService.sucesso('Cliente excluído com sucesso!')

        this.dialogRef.close(true);

      },

      

      error: (erro) => {

       this.mensagensService.erro( 'Error ao excluír cliente!')

      }

    });

}

}
