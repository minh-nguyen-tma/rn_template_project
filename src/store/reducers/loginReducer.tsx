import { ActionType } from "../ActionType"

const INITIAL_STATE: LOGIN_STATE = {
   loginToken: null
}

export interface LOGIN_STATE {
   loginToken: String | null
}

interface ReducerAction {
   type: ActionType,
   payload: LOGIN_STATE
}

export default function reducer(state:LOGIN_STATE = INITIAL_STATE, action: ReducerAction): LOGIN_STATE | undefined {
   switch (action.type) {
      case ActionType.LOGGED_OUT: {
         return {
            ...state,
            loginToken: action.payload.loginToken
         }
      }
      default:
         return state;
   }
}