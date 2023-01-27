import { Inject, Injectable } from '@nestjs/common';
import { UserModel } from '../model/user.model';

@Injectable()
export default class UserRepository {
  constructor(
    @InjectModel(UserModel)
    readonly UserModel: UserModel,
  ) {}
}
