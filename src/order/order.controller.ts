import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get('order-search')
  findorder(@Query('orderId',ParseIntPipe) orderId: number) {
    return this.orderService.findorder(orderId);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':orderId')
  findOne(@Param('orderId',ParseIntPipe)  orderId: number) {
    return this.orderService.findOne(orderId);
  }

  @Patch(':orderId')
  update(@Param('orderId',ParseIntPipe)  orderId: number, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(orderId, updateOrderDto);
  }

  @Delete(':orderId')
  remove(@Param('orderId', ParseIntPipe)  orderId: number) {
    return this.orderService.remove(orderId);
  }
}
