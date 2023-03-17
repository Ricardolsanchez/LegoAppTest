import { Dispatch, SetStateAction } from "react";

export interface singleItem {
    id?: number;
    name?: string;
    unit_price?: number;
    stock?: number;
    image?: string;
}

export interface CartItem {
    id: number;
    name: string;
    unit_price: number;
    stock: number;
    image:string;
    quantity?: number;
    legoName?: string;
  }

  export interface CartState {
    cart: [CartItem];
  }
  