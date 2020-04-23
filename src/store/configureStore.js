import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { verifyAuth } from "./actions/firebaseAuth";
import rootReducer from "./reducers/rootReducer";

export default function configureStore(persistedState) {
    const store = createStore(
        rootReducer,
        persistedState,
        applyMiddleware(thunkMiddleware)
    );
    store.dispatch(verifyAuth());
    return store;
}