import { Actions } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Topping } from "src/products/models/topping.model";

export const LOAD_TOPPINGS = '[Product] Load toppings';
export const LOAD_TOPPINGS_FAIL = '[Product] Load toppings fail';
export const LOAD_TOPPINGS_SUCCESS = '[Product] Load toppings Success';
export const VISUALISE_TOPPINGS = '[Product] Visualise Toppings';


export class LoadToppings implements Action {
  readonly type = LOAD_TOPPINGS;
}
export class LoadToppingsFail implements Action {
  readonly type = LOAD_TOPPINGS_FAIL;
  constructor(public payload: any){}
}
export class LoadToppingsSuccess implements Action {
  readonly type = LOAD_TOPPINGS_SUCCESS
  constructor(public payload: Topping[]){}
}
export class VisualizeToppings implements Action {
  readonly type = VISUALISE_TOPPINGS
  constructor(public payload: number[]){}
}
export type ToppingsAction =  LoadToppings | LoadToppingsFail | LoadToppingsSuccess | VisualizeToppings;
