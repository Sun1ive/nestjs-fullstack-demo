import { Injectable, Inject } from '@nestjs/common';
import { CacheService } from './cache/cache.service';

@Injectable()
export class AppService {
  constructor(
    @Inject('CacheService') private readonly cacheService: CacheService,
  ) {}

  public fetch(key: string) {
    try {
      return this.cacheService.getFromCache(key);
    } catch (error) {
      console.log(error);
    }
  }
}
