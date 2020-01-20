import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getDocs(): string {
    return 'Access /acordo/faturamento';
  }
}
