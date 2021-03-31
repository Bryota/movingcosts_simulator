import { createStore } from 'redux';

interface defaultState {
    income: number;
    expenditure: number;
    initialCost: number;
    furnitureCost: number;
    calculatedInitialCost: number;
}

interface ActionState {
    type: string;
    payload: defaultState;
}

const initialState: defaultState = {
    income: 0,
    expenditure: 0,
    initialCost: 0,
    furnitureCost: 0,
    calculatedInitialCost: 0
}

const reducer = (state = initialState , action: ActionState) => {
    switch(action.type) {
        case 'SETINCOME':
            return { 
                ...state,
                income: action.payload.income
            };
        case 'SETEXPENDITURE':
            return { 
                ...state,
                expenditure: action.payload.expenditure 
            };
        case 'SETINITIALCOST':
            return {
                ...state,
                initialCost: action.payload.initialCost
            }
        case 'SETCALCULATEDINITIALCOST':
            return {
                ...state,
                calculatedInitialCost: action.payload.calculatedInitialCost
            }
        case 'SETFURNITURECOST':
            return {
                ...state,
                furnitureCost: action.payload.furnitureCost
            }
    }
    return state;
}

const store = createStore(reducer);

export default store;