import { createAction, handleActions } from 'redux-actions';


// 액션타입
export const INCREMENT = 'ReduxTutorial/counter/INCREMENT';  
export const DECREMENT = 'ReduxTutorial/counter/DECREMENT';  
export const ADD = 'ReduxTutorial/counter/ADD';  
export const REMOVE = 'ReduxTutorial/counter/REMOVE';

// 액션 생성자
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const add = createAction(ADD);
export const remove = createAction(REMOVE);

const initialState = {
    counter: [
        {
            counterNum: 0,
        },
    ],  
};

export default handleActions({
    [INCREMENT]: (state, action) => {
        const counter = state.counter
        return({
            counter: [
                ...counter.slice(0, action.payload),
                {
                    counterNum: counter[action.payload].counterNum + 1,
                },
                ...counter.slice(action.payload + 1, counter.length),
            ]
        }); 
    },
    [DECREMENT]: (state, action) => {
        const counter = state.counter
        return({
            counter: [
                ...counter.slice(0, action.payload),
                {
                    counterNum: counter[action.payload].counterNum - 1,
                },
                ...counter.slice(action.payload + 1, counter.length)
            ]
        });
    },
    [ADD]: (state) => {
        const counter = state.counter
        return({
            counter: [
                ...counter,
                {
                    counterNum: 0,
                },
            ]
        });
    },
    [REMOVE]: (state) => {
        const counter = state.counter
        return ({
            counter: counter.slice(0, counter.length - 1)
        });
    },
}, initialState);