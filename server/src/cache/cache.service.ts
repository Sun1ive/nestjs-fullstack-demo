import { Injectable } from '@nestjs/common';
import * as cache from 'memory-cache';

@Injectable()
export class CacheService {
  private readonly _cache;

  constructor() {
    this._cache = new cache.Cache();
  }

  public getFromCache(key: string) {
    if (!this._cache.get(key)) {
      this._cache.put(key, Math.random(), 60000);
    }

    return this._cache.get(key);
  }
}
