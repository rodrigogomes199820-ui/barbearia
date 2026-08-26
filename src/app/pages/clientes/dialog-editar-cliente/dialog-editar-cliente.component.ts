import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';

import { ClientesService } from './../../../services/clientes.service';
import { MensagensService } from './../../../services/mensagens.service';

@Component({
  selector: 'app-dialog-editar-cliente',
  templateUrl: './dialog-editar-cliente.component.html',
  styleUrls: ['./dialog-editar-cliente.component.scss']
})
export class DialogEditarClienteComponent {

  clienteForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clientesService: ClientesService,
    private mensagensService: MensagensService,

    private dialogRef: MatDialogRef<DialogEditarClienteComponent>,

    @Inject(MAT_DIALOG_DATA)
    public cliente: any
  ) {

    this.clienteForm = this.formBuilder.group({

      nome: [
        cliente.nome,
        Validators.required
      ],

      email: [
        cliente.email,
        [
          Validators.required,
          Validators.email
        ]
      ],

      dataNascimento: [
        cliente.dataNascimento || ''
      ],

      telefone: [
        cliente.telefone,
        Validators.required
      ]

    });

  }

  salvar(): void {

    if (this.clienteForm.invalid) {

      this.clienteForm.markAllAsTouched();

      return;
    }

    const clienteAtualizado = {
      ...this.clienteForm.value,
      id: this.cliente.id
    };

    this.clientesService.atualizarCliente(this.cliente.id, clienteAtualizado)
      .subscribe({
        next: () => {
          this.mensagensService.sucesso('Cliente atualizado com sucesso!');
          this.dialogRef.close(true);
        },
        error: (erro) => {
          console.error('Erro ao atualizar cliente:', erro);
          this.mensagensService.erro('Não foi possível atualizar o cliente.');
        }
      });

  }

  cancelar(): void {

    this.dialogRef.close();

  }

}