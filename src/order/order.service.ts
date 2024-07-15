import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
// import { UserService } from 'src/user/user.service';

@Injectable()
export class OrderService {
  // constructor(private readonly userService: UserService) {}
  private orders = [];

  create(newOrder: CreateOrderDto) {
    return this.orders.push(newOrder);
  }

  findAll() {
    return this.orders;
  }

  findOne(orderId: number) {
    const order = this.orders.filter((order) => order.orderId === orderId);
    return order;
  }

  update(orderId: number, updateOrderDto: UpdateOrderDto) {
    let updatedOrder; // used to store the updated order
    this.orders = this.orders.map((order) => {
      if (order.orderId === orderId) {
        updatedOrder = order;
        updatedOrder = { ...order, ...updateOrderDto };
        return updatedOrder;
      }
      return order;
    });
  }

  remove(orderId: number) {
    this.orders = this.orders.filter((order) => order.orderId !== orderId);
    return this.orders;
  }
  findorder(orderId: number) {
    // this is for search
    if (orderId) {
      return this.orders.filter((order) => order.orderId === orderId);
    }
    return 'Id not found..';
  }
}
