import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {

  @Get('login')
  login(): { authentication: string } {
    return {
      authentication: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IldhbGRpciBGZWl0b3phIiwicm9sZXMiOlsiQURNSU4iXSwiaWF0IjoxNTE2MjM5MDIyfQ.isweV0FMSoaecfqV2CoHg9evE7nAIoz3UUI0qkIwSH8`,
    };
  }
}
