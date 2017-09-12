import { combineReducers } from 'redux';
import { routerReducer } from '@angular-redux/router';

import { accountReducer } from '../../dashboard/redux/account.reducers';


// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = combineReducers({
    account: accountReducer,
    router: routerReducer,
});
