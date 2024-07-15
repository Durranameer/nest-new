import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { UserController } from './user/user.controller';
import { OrderController } from './order/order.controller';
import { UserService } from './user/user.service';
import { OrderService } from './order/order.service';


@Module({
  // imports: [UserModule, OrderModule],
  // controllers: [AppController],
  // providers: [AppService],
  imports:[],
  controllers:[UserController,OrderController],
  providers:[UserService,OrderService]
})
export class AppModule {}
