import { Action } from "@ngrx/store";

import { Pizza } from "src/products/models/pizza.model";
// load Pizzas
export const LOAD_PIZZAS = '[Product] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Product] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Product] Load Pizzas Success';

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}
export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) {}
}
export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public paylod: Pizza[]){}
}
export type PizzaAction =  LoadPizzas | LoadPizzasFail | LoadPizzasSuccess
