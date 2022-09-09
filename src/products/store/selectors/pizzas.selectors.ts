import { createSelector } from "@ngrx/store";
import { Pizza } from "src/products/models/pizza.model";
import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizzas.reducer';

export const getPizzaState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.pizzas
)
export const getPizzasEntities = createSelector(
  getPizzaState,
  fromPizzas.getPizzasEntities
);

export const getSelectedPizza = createSelector(
  getPizzasEntities,
  fromRoot.getRouterState,
  (entities, router): Pizza => {
    return router.state && entities[router.state.params.pizzaId];
  }
);

export const getAllPizzasEntity = createSelector(getPizzaState, fromPizzas.getPizzasEntities);
export const getAllPizzas = createSelector(getAllPizzasEntity, (entries) => {
  return Object.keys(entries).map(id => entries[parseInt(id, 10)]);
});
export const getPizzaLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getPizzaLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);


