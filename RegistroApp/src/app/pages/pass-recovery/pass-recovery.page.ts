import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pass-recovery',
  templateUrl: './pass-recovery.page.html',
  styleUrls: ['./pass-recovery.page.scss'],
})
export class PassRecoveryPage implements OnInit {

  userRecovery!: string;
  passRecovery!: string;

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  async mostrarConfirmacion() {
    const alert = await this.alertController.create({
      header: 'Alerta de confirmación',
      message: '¿Estás seguro de restablecer la contraseña?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Operación cancelada');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Operación confirmada');
            console.log('Redireccionando al Login');
            this.router.navigate(['/login']);
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
