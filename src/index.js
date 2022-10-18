import store from './store'

const unsubscribe = store.subscribe( () => {
    console.log("Store changed!", store.getState());
}) //subscribe() always returns a function. Invoke the function returned by it lead to unsubscribe the change listener


store.dispatch({
    type: "bugAdded",
    payload: {
        description: "Bug1"
    }
})

unsubscribe();
store.dispatch({
    type: "bugRemoved",
    payload: {
        id: 1
    }
})

console.log(store.getState());
