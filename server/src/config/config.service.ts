import { Injectable } from '@nestjs/common';
import { parse } from 'dotenv';
import { readFileSync } from 'fs';
import { IConfig } from 'interfaces/config.interfaces';

@Injectable()
export class ConfigService {
  private readonly envConfig: IConfig;

  constructor(filePath: string) {
    this.envConfig = parse(readFileSync(filePath)) as any;
  }

  get(key: keyof IConfig): string {
    return this.envConfig[key];
  }
}
