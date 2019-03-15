import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { decode, verify } from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    if (
      !request.headers.authorization ||
      request.headers.authorization.split(' ')[0] !== 'Bearer'
    ) {
      throw new HttpException('Invalid Token', HttpStatus.UNAUTHORIZED);
    }

    const auth = request.headers.authorization;
    const token = auth.split(' ')[1];

    try {
      const { exp } = verify(token, 'VERY_SECRET_KEY') as any;
      const isValid = Date.now() > exp;

      return isValid;
    } catch (error) {
      console.log(error.message);
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }

    return true;
  }
}
