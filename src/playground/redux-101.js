import {createStore} from 'redux';


//Action generators
const incrementCount = ({incrementBy = 1} = {}) => ({
        type: "INCREMENT",
        incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: "DECREMENT",
    decrementBy
});

const setCount = ({count}) => ({
    type: "SET",
    count
});

const resetCount = () => ({
    type: "RESET"
});

//reducers
// are pure functions - input
// never change state or actions

const countReducer = (state= {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
};

//reducer
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch(incrementCount({ incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 20}));