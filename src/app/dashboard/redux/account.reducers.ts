
import { Action } from 'redux';
import { AccountActions } from './account.actions';

const INITIAL_STATE = {
    items: {},
    loading: false,
    error: null,
};

export function accountReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case AccountActions.ACCOUNT_LOAD_STARTED:
            return {
                ...state,
                items: {},
                loading: true,
                error: null,
            };
        case AccountActions.ACCOUNT_LOAD_OK:
            return {
                ...state,
                items: action.payload,
                loading: false,
                error: null,
            };
        case AccountActions.ACCOUNT_LOAD_ERR:
            return {
                ...state,
                items: {},
                loading: false,
                error: action.erro,
            };
    }

    return state;
}
