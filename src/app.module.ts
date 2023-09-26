import { MiddlewareConsumer, Module, NestModule, RequestMethod, forwardRef } from '@nestjs/common';
import { UserIdCheckMiddleware } from './middlewares/uder-id-check.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    forwardRef(() => UserModule),
    forwardRef(() => AuthModule)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) { //Aplicando middleware para consumo
    consumer
      .apply(UserIdCheckMiddleware) //Aplicando esse middleware
      .forRoutes({ //Para todas as rotas que atende a condição abaixo
        path: 'users/:id', //Que tenha essa rota
        method: RequestMethod.ALL //E tenha todos esses métodos
      });
  }
}
