import { Injectable } from '@nestjs/common';
import { AccountRepository } from './account.repository';

@Injectable()
export class AccountService {
  constructor(private readonly accountRepository: AccountRepository) {}
  async findOne(email: string) {
    return this.accountRepository.findOne({
      where: {
        email,
      },
    });
  }
}
