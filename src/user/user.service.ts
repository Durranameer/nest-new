import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private products = [
    {
      id: 1,
      name: 'Laptop',
      category: 'Electronics',
      price: 999.99,
    },
    {
      id: 2,
      name: 'Smartphone',
      category: 'Electronics',
      price: 699.99,
    },
    {
      id: 3,
      name: 'Desk Chair',
      category: 'Furniture',
      price: 89.99,
    },
    {
      id: 4,
      name: 'Bluetooth Headphones',
      category: 'Accessories',
      price: 199.99,
    },
    {
      id: 5,
      name: 'Running Shoes',
      category: 'Footwear',
      price: 59.99,
    },
    {
      id: 6,
      name: 'Backpack',
      category: 'Bags',
      price: 49.99,
    },
    {
      id: 7,
      name: 'Coffee Maker',
      category: 'Home Appliances',
      price: 29.99,
    },
    {
      id: 8,
      name: 'Electric Kettle',
      category: 'Home Appliances',
      price: 19.99,
    },
    {
      id: 9,
      name: 'Notebook',
      category: 'Stationery',
      price: 2.99,
    },
    {
      id: 10,
      name: 'Pen Set',
      category: 'Stationery',
      price: 5.99,
    },
  ];

  create(newProduct: CreateUserDto) {
    return this.products.push(newProduct);
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.filter((product) => product.id === id);
    return product;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    let updatedProduct; // used to store the updated product
    this.products = this.products.map((product) => {
      if (product.id === id) {
        updatedProduct = product;
        updatedProduct = { ...product, ...updateUserDto };
        return updatedProduct;
      }
      return product;
    });

    return updatedProduct;
  }

  remove(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
    return this.products;
  }
  findProduct(name: string) {
    // this is for search
    if (name) {
      return this.products.filter((product) => product.name === name);
    }
    return 'no item';
  }
}
