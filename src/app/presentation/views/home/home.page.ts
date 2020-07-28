import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/entities/User';
import { ToastController } from '@ionic/angular';
import { Util } from '../Util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  private user: User;

  constructor(private route: ActivatedRoute, private router: Router, private toastController: ToastController) {
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.user = this.router.getCurrentNavigation().extras.state.user;
      }
    });
  }

  ngOnInit() {
    this.presentToast('Last login: ' + Util.getDate(this.user.lastLogin));
  }

  private async presentToast(message: string) {
    const toast = await this.toastController.create({
        message,
        duration: 3000
    });
    toast.present();
  }



}
