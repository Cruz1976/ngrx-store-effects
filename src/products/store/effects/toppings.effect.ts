import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import {of} from 'rxjs/observable/of';
import {map, catchError, switchMap} from 'rxjs/operators';


import * as toppingsActions from '../actions/toppings.action';
import * as fromServices from '../../services/toppings.service';

@Injectable()
export class ToppingsEffects {
  constructor(private action$: Actions,private toppingsServices: fromServices.ToppingsService ){}

  @Effect()
  loadToppings = this.action$.ofType(toppingsActions.LOAD_TOPPINGS).pipe(
    switchMap(() => {
      return this.toppingsServices.getToppings()
      .pipe(
        map(toppings => new toppingsActions.LoadToppingsSuccess(toppings)),
        catchError(error => of(new toppingsActions.LoadToppingsFail(error)))
      )
    })
  );
}
