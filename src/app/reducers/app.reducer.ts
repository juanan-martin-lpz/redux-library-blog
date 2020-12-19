import { AppState } from '../state/app.state';
import { Action, IncrementarAction, DecrementarAction } from '../actions/app.actions';

export function reducer(state: AppState, action: Action): AppState {

  console.log(action);

  switch (action.type) {

    case 'INCREMENTAR':
      return { ...state, contador: state.contador += 1 };
    case 'DECREMENTAR':
      return { ...state, contador: state.contador - 1 };

    default:
      return state;
  }

}
