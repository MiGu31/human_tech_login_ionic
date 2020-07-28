import { UserRepositoryRemote } from 'src/app/usecase/repository/User/UserRepositoryRemote';
import { User } from 'src/app/entities/User';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserRequest } from '../entity/entity-request/UserRequest.request';
import { map } from 'rxjs/operators';
import { UserEntity } from '../entity/UserEntity';
import { UserEntityResponse } from '../entity/entity-response/UserEntity.response';

@Injectable({
    providedIn: 'root'
})
export class CloudUserRepository implements UserRepositoryRemote {

    constructor() { }

    login(user: User): Observable<User> {
        const userRequest: UserRequest = {
            email: user.email,
            password: user.password
        };

        return this.toUserObservable(userRequest).pipe(
            map((userEntity: UserEntity) => {
                return UserEntityResponse.toUser(userEntity);
            }));
    }

    toUserObservable(userRequest: UserRequest): Observable<UserEntity> {
        const userObservable: Observable<UserEntity> = new Observable((observer) => {
            Backendless.UserService.login(userRequest.email, userRequest.password)
            .then((response: UserEntity) => {
                observer.next(response);
            }).catch(error => {
                observer.error(error);
            }).finally(() => {
                observer.complete();
            });
        });

        return userObservable;
    }

}






