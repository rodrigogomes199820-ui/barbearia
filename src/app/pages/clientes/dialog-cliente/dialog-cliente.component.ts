import { ClientesService } from './../../../services/clientes.service';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-cliente',
  templateUrl: './dialog-cliente.component.html',
  styleUrls: ['./dialog-cliente.component.scss']
})
export class DialogClienteComponent {

  clienteForm: FormGroup;
  selectedTab = 0;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogClienteComponent>,
      @Inject(MAT_DIALOG_DATA)
    public data: any,
    private clientesService: ClientesService

  ) {

    this.clienteForm = this.formBuilder.group({

      nome: ['', Validators.required],

      dataNascimento: [''],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      telefone: ['', Validators.required]

    });

  }

 salvar(): void {

  if (this.clienteForm.invalid) {

    this.clienteForm.markAllAsTouched();

    return;
  }

  const cliente = {
    ...this.clienteForm.value,
    dataNascimento: this.converterDataParaApi(this.clienteForm.value.dataNascimento)
  };


  this.clientesService.adicionarCliente(cliente)
    .subscribe({

      next: (resposta) => {

        
        this.dialogRef.close(true);

      },

      error: (erro) => {

        console.error('Erro ao cadastrar cliente:', erro);

      }

    });

}

  cancelar(): void {

    this.dialogRef.close();

  }

  formatarData(evento: Event): void {
    const input = evento.target as HTMLInputElement;
    const numeros = input.value.replace(/\D/g, '').slice(0, 8);
    const partes = [
      numeros.slice(0, 2),
      numeros.slice(2, 4),
      numeros.slice(4, 8)
    ].filter(Boolean);

    input.value = partes.join('/');
    this.clienteForm.get('dataNascimento')?.setValue(input.value, { emitEvent: false });
  }

  private converterDataParaApi(data: string): string {
    const partes = data?.split('/') ?? [];

    if (partes.length !== 3 || partes.some(parte => !parte)) {
      return data;
    }

    return `${partes[2]}-${partes[1]}-${partes[0]}`;
  }

  editar(): void {

  }

}
