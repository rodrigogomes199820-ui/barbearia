import { ClientesService } from './../../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';

import { DialogClienteComponent } from './dialog-cliente/dialog-cliente.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  dataSource: any[] = [];

  page = 1;
  limit = 5;
  totalClientes = 0;

  displayedColumns: string[] = [
    'nome',
    'email',
    'telefone',
    'acoes'
  ];

  constructor(
    private clientesService: ClientesService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadCliente();
  }

  loadCliente(): void {

    this.clientesService
      .getClientes(this.page, this.limit)
      .subscribe((resposta) => {

        const corpo = resposta.body;
        const clientes = Array.isArray(corpo)
          ? corpo
          : corpo?.data ?? [];

        this.dataSource = clientes.map((cliente: any) => {

          return {
            id: cliente.id,
            nome: cliente.nome,
            email: cliente.email,
            telefone: cliente.telefone
          };

        });

        this.totalClientes = Number(
          resposta.headers.get('X-Total-Count') ??
          (Array.isArray(corpo) ? clientes.length : corpo?.items ?? clientes.length)
        );

      });

  }

  alterarPagina(event: PageEvent): void {

    this.page = event.pageIndex + 1;
    this.limit = event.pageSize;

    this.loadCliente();

  }

  abrirDialog(): void {

    const dialogRef = this.dialog.open(
      DialogClienteComponent,
      {
        width: '400px',
        maxWidth: '95vw',
        autoFocus: false
      }
    );

    dialogRef.afterClosed().subscribe((resultado) => {

      if (resultado) {
        this.loadCliente();
      }

    });

  }

}