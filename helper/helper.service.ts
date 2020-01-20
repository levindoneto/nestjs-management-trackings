import { RsaService, NodeRSA } from '@akanass/nestjsx-crypto';
import { Injectable } from '@nestjs/common';
import { Subscription } from 'rxjs';

@Injectable()
export class HelperService {
  constructor(private readonly _rsaService: RsaService) {}

  /**
   * Get random string to be used as a unique ID by HTTP transactions.
   * @param {Subscription}.
   * @return {string} random ID.
   */  
  getRandomId(): Subscription {
      // The data can be accessed using (data: NodeRSA)
      return this._rsaService.createKey().subscribe();

      //(k: NodeRSA) => console.log(k),
      // e => console.error(e)
  }
}
