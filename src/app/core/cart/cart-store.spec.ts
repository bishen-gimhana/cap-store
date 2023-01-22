import { TestBed } from '@angular/core/testing';
import { CartItem } from './cart-item';
import { intialState } from './cart-state';
import {  CartStore } from './cart-store';

describe('CartStore', () => {
  let CartStore : CartStore;

  beforeEach(()=> {}
  TestBed.configureTestingModule({
    providers:[CartStore]})
  );

  CartStore = TestBed.get(CartStore);

  it('should create an instance', () => {
    expect(new CartStore()).toBeTruthy();
  });
  it('can add item into cart state',()=>{
  const currentState = intialState;
  expect(currentState.cartItems.length)
  .toBe(0);

  const cartItem : CartItem = {
    productId: 1,
    imgUrl:'img/apple',
    price: 2,
    quantity: 10,
    itemTotal:20,
    name: 'apple'
  };
  CartStore.addCartItem(cartItem);
  const expectedState = {
    cartItem: [cartItem]
  };

  expect(CartStore.state).toEqual
  (expectedState);


});


});
