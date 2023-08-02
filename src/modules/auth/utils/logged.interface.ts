import { Role } from '@utils/types';

export interface LoggedInterface {
  id: number;
  email: string;
  username: string;
  role: Role;
}
