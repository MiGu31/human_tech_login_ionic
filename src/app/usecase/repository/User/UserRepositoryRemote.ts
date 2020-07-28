import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/entities/User';

export interface UserRepositoryRemote {
    login(user: User): Observable<User>;
}

export const USER_REPOSITORY_REMOTE = new InjectionToken<UserRepositoryRemote>('UserRepositoryRemote');
