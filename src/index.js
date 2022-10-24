import store from './store'

import {bugAdded, bugRemoved, bugResolved} from "./actions";

const unsubscribe = store.subscribe( () => {
    console.log("Store changed!", store.getState());
}) //subscribe() always returns a function. Invoke the function returned by it lead to unsubscribe the change listener


store.dispatch(bugAdded("Bug 1"));
// unsubscribe();
store.dispatch(bugRemoved(1));
store.dispatch(bugAdded("Bug 2"));
store.dispatch(bugResolved(2));

console.log(store.getState());
