import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/entities/User';
import { LoginPresenter, LoginView } from './login.presenter';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy, LoginView {

  private user: User;
  private loginPresenter: LoginPresenter;

  constructor(
      private loadingController: LoadingController,
      private toastController: ToastController,
      private router: Router,
      loginPresenter: LoginPresenter) {
      this.user = new User();
      this.loginPresenter = loginPresenter;
      this.loginPresenter.setLoginView(this);
  }

    public ngOnInit(): void {

    }

    public ngOnDestroy(): void {
        this.loginPresenter.destroy();
    }

    public login() {
        this.loginPresenter.login(this.user);
    }

    goHome(user: User) {
        const params: NavigationExtras = {
            state: { user }
        };
        this.router.navigate(['/home'], params);
    }

    public showLoading() {
        this.loading();
    }

    public async hideLoading() {
        return await this.loadingController.dismiss();
    }

    public showError(error: string): void {
        this.toast(error);
    }

    private async loading() {
        const loading = await this.loadingController.create({
            message: 'Loading ...'
        });
        await loading.present();
    }

    private async toast(message: string) {
        const toast = await this.toastController.create({
            message,
            duration: 2500
        });
        toast.present();
    }

}
