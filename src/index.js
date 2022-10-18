import store from './store'
import * as actions from './actionTypes';

const unsubscribe = store.subscribe( () => {
    console.log("Store changed!", store.getState());
}) //subscribe() always returns a function. Invoke the function returned by it lead to unsubscribe the change listener


store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
        description: "Bug1"
    }
})

unsubscribe();
store.dispatch({
    type: actions.BUG_REMOVED,
    payload: {
        id: 1
    }
})

console.log(store.getState());
