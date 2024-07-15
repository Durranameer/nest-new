export class CreateOrderDto {
    customerID :string;
    totalPrice: number;
    address:string;
    orderId:number;
    products:[string];
}
