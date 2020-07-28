import { User } from 'src/app/entities/User';
import { UserEntity } from '../UserEntity';

export class UserEntityResponse {

    public static toUser(userEntity: UserEntity): User {
        let user: User = null;
        if (userEntity != null) {
            user = new User();
            user.setEmail(userEntity.email);
            user.setName(userEntity.name);
            user.setCreated(userEntity.created);
            user.setLastLogin(userEntity.lastLogin);
            user.setToken(userEntity['user-token']);
        }
        return user;
    }

}
