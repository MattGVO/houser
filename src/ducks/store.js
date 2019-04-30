import { createStore } from 'redux'

const initialState={
      propertyName:"",
      address:"",
      city:"",
      state:"",
      zip: 0,
      img: "",
      mortgage:0,
      rent: 0,
}

export const STEP_1 = 'STEP_1';
export const STEP_2 = 'STEP_2';
export const STEP_3 = 'STEP_3';


function reducer(state = initialState , action){
    const { type, payload } = action
    switch(type) {
        case STEP_1:
            return {...state,...payload};
        case STEP_2:
            return {...state,...payload};
        case STEP_3:
            return {...state,...payload};
        default:
            return state;
    }
}

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)