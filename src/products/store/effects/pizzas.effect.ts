import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import * as pizzaActions from '../actions/pizzas.action';
import * as fromServices from '../../services';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PizzaEffets {
  constructor(
    private actions$: Actions,
    private services: fromServices.PizzasService){

  }
  @Effect()
  loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS).pipe(
    switchMap(() => {
      return this.services.getPizzas().pipe(
        map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
        catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
      )
    })
  );
}
