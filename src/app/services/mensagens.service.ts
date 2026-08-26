import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MensagensService {

  constructor(private snackBar: MatSnackBar) {}

  sucesso(mensagem: string): void {
    this.exibir(mensagem, 'snackbar-sucesso', 2000);
  }

  carregando(mensagem: string): MatSnackBarRef<TextOnlySnackBar> {
    return this.snackBar.open(mensagem, undefined, {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: ['snackbar-sucesso']
    });
  }

  erro(mensagem: string): void {
    this.exibir(mensagem, 'snackbar-erro', 3000);
  }

  aviso(mensagem: string): void {
    this.exibir(mensagem, 'snackbar-aviso', 3000);
  }

  informacao(mensagem: string): void {
    this.exibir(mensagem, 'snackbar-informacao', 3000);
  }

  private exibir(mensagem: string, classe: string, duracao: number): void {
    this.snackBar.open(mensagem, 'Fechar', {
      duration: duracao,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: [classe]
    });
  }
}
