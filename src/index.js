import store from './store'

import {bugAdded, bugRemoved} from "./actions";

const unsubscribe = store.subscribe( () => {
    console.log("Store changed!", store.getState());
}) //subscribe() always returns a function. Invoke the function returned by it lead to unsubscribe the change listener


store.dispatch(bugAdded("Bug 2"));
unsubscribe();
store.dispatch(bugRemoved(1));

console.log(store.getState());
