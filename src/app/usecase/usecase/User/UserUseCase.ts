import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRepositoryRemote, USER_REPOSITORY_REMOTE } from '../../repository/User/UserRepositoryRemote';
import { User } from 'src/app/entities/User';


@Injectable({
    providedIn: 'root'
})
export class UserUseCase {
    private userRepositoryRemote: UserRepositoryRemote;

    constructor(
        @Inject(USER_REPOSITORY_REMOTE) userRepositoryRemote: UserRepositoryRemote) {
        this.userRepositoryRemote = userRepositoryRemote;
    }

    login(user: User): Observable<User> {
        return this.userRepositoryRemote.login(user);
    }

}
