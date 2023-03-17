import { CartItem } from '../../interfaces/interface';
import {Dispatch} from 'react';


export interface AddItemAction {
  readonly type: 'ON_ADD_ITEM';
  payload: CartItem;
}

export interface RemoveItemAction {
  readonly type: 'ON_REMOVE_ITEM';
  payload: string;
}

export interface ResetBasketAction {
  readonly type: 'ON_RESET_BASKET';
}
export interface ReduceQuantityAction {
  readonly type: 'ON_REDUCE_QUANTITY';
  payload: string;
}
export interface UpdateCartAction {
  readonly type: 'ON_UPDATE_CART';
  payload: [CartItem];
}

export type CartAction =
  | AddItemAction
  | RemoveItemAction
  | ResetBasketAction
  | ReduceQuantityAction
  | UpdateCartAction;

export const onAddItem = (item: CartItem) => {
  return async (dispatch: Dispatch<CartAction>) => {
    dispatch({
      type: 'ON_ADD_ITEM',
      payload: item
    });
  };
};

export const onRemoveItem = (id: string) => {
  return async (dispatch: Dispatch<CartAction>) => {
    dispatch({
      type: 'ON_REMOVE_ITEM',
      payload: id
    });
  };
};

export const onResetBasket = () => {
  return async (dispatch: Dispatch<CartAction>) => {
    dispatch({
      type: 'ON_RESET_BASKET'
    });
  };
};

export const onReduceQuantity = (id: string) => {
  return async (dispatch: Dispatch<CartAction>) => {
    dispatch({
      type: 'ON_REDUCE_QUANTITY',
      payload: id
    });
  };
};

export const updateCart = (list: [CartItem]) => {
  return async (dispatch: Dispatch<CartAction>) => {
    dispatch({
      type: 'ON_UPDATE_CART',
      payload: list
    });
  };
};