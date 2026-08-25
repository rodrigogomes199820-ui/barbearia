import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  totalClientes = 0;
  totalAgendamentos = 0;
  totalBarbeiros = 0;
  faturamento = 0;

  agendamentos: any[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.loadCliente();
    this.loadAgenda();
    this.loadBarbeiros();
    this.loadFaturamento();
  }

  loadCliente() {
    this.dashboardService.getClientes().subscribe((resp) => {
      this.totalClientes = resp.length;
    });
  }

  loadAgenda() {
    this.dashboardService.getAgendamentos().subscribe((resp) => {
      const hoje = new Date().toLocaleDateString('en-CA');

      this.agendamentos = resp.filter((item) => {
        return item.data === hoje;
      });

      this.totalAgendamentos = this.agendamentos.length;
    });
  }

  loadBarbeiros() {
    this.dashboardService.getBarbeiros().subscribe((resp) => {
      this.totalBarbeiros = resp.length;
    });
  }

  loadFaturamento() {
    this.dashboardService.getServicos().subscribe((resp) => {
      this.faturamento = resp.length;
    });
  }
}
