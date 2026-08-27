import { BarbeirosService } from './../../services/barbeiros.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-barbeiros',
  templateUrl: './barbeiros.component.html',
  styleUrls: ['./barbeiros.component.scss']
})
export class BarbeirosComponent implements OnInit {
dataSource: any[] = [];
page = 1;
limit = 5;
totalBarbeiros = 0;
 displayedColumns: string[] = [
    'nome',
    'email',
    'telefone',
    'especialidade',
    'acoes'
  ];

  constructor(
    private barbeirosService : BarbeirosService
  ){}


  ngOnInit(): void {
    this.loadBarbeiros()
  }


  loadBarbeiros(): void {

  this.barbeirosService
    .getBarbeiros(this.page, this.limit)
    .subscribe((item) => {

      console.log('Resposta:', item);

      const barbeiros = item.body.data ?? [];

      console.log('Barbeiros:', barbeiros);

      this.dataSource = barbeiros.map((barbeiro: any) => {

        return {
          id: barbeiro.id,
          nome: barbeiro.nome,
          email: barbeiro.email,
          telefone: barbeiro.telefone,
          especialidade: barbeiro.especialidade
        };

      });

      console.log('DataSource:', this.dataSource);

    });

}

  abrirDialog(){

  }

  editarBarbeiro(){

  }

  historicoBarbeiro(){

  }

  excluirBarbeiro(){

  }

   alterarPagina(event: PageEvent): void {
  
      this.page = event.pageIndex + 1;
      this.limit = event.pageSize;
  
     this.loadBarbeiros()
  
    }

}
