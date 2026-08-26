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
    public data: any

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

    const cliente = this.clienteForm.value;

    console.log('Cliente:', cliente);

    this.dialogRef.close(cliente);
  }

  cancelar(): void {

    this.dialogRef.close();

  }

  editar(): void {

  }

}
