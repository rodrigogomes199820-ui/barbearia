import { HistoricoService } from './../../../services/historico.service';
import { ClientesService } from 'src/app/services/clientes.service';

import { Component, OnInit , Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-historico-cliente',
  templateUrl: './dialog-historico-cliente.component.html',
  styleUrls: ['./dialog-historico-cliente.component.scss']
})
export class DialogHistoricoClienteComponent implements OnInit {
historico: any[] = [];

constructor(
   private ClientesService : ClientesService,
   private historicoService : HistoricoService,
   private dialogRef: MatDialogRef<DialogHistoricoClienteComponent>,

    @Inject(MAT_DIALOG_DATA)
    public cliente: any
){

}

ngOnInit(): void{
this.loadHistorico()
}


private loadHistorico(): void {
  this.historicoService
    .getHistoricoCliente(this.cliente.id)
    .subscribe((historicos) => {
      this.historico = historicos;

    });

}

  cancelar(){
  this.dialogRef.close();
  }

}
