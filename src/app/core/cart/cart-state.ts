import { CartItem } from './cart-item';

export interface CartState {
    cartItems: CartItem[];
    id: string;
}

export const intialState = {cartItems : [], id:"12"};

