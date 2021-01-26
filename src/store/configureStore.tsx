import { applyMiddleware, compose, createStore } from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

export default function configureStore(preloadedState:any = undefined) {
   const storeEnhancer = compose(applyMiddleware(thunk, promise));
   const store = createStore(rootReducer, preloadedState, storeEnhancer);
   return store;
}