import { Presenter } from '../../Presenter';
import { View } from '../../View';
import { User } from 'src/app/entities/User';
import { UserUseCase } from 'src/app/usecase/usecase/User/UserUseCase';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class LoginPresenter implements Presenter {

    private loginView: LoginView;
    private readonly userUseCase: UserUseCase;
    constructor(userUseCase: UserUseCase) {
        this.userUseCase = userUseCase;
    }

    setLoginView(loginView: LoginView) {
        this.loginView = loginView;
    }

    destroy(): void {
        this.loginView = null;
    }

    login(user: User) {
        if (!this.loginView) {
            return;
        }
        this.loginView.showLoading();
        this.userUseCase.login(user).subscribe({
            next: (userResponse: User) => {
                this.loginView.goHome(userResponse);
            },
            error: (error: Error) => {
                this.loginView.showError(error.message);
                this.loginView.hideLoading();
            },
            complete: () => {
                this.loginView.hideLoading();
            }
        });
    }

}

export interface LoginView extends View {
    goHome(user: User);
}
