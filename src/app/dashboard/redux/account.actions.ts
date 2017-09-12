
import { Injectable } from '@angular/core';
import { NgRedux, dispatch } from '@angular-redux/store';
import { IAppState } from '../../core/redux/IAppState';

@Injectable()
export class AccountActions {
    static readonly ACCOUNT_LOAD = 'ACCOUNT_LOAD';
    static readonly ACCOUNT_LOAD_STARTED = 'ACCOUNT_LOAD_STARTED';
    static readonly ACCOUNT_LOAD_OK = 'ACCOUNT_LOAD_OK';
    static readonly ACCOUNT_LOAD_ERR = 'ACCOUNT_LOAD_ERR';


    constructor(
        private _ngRedux: NgRedux<IAppState>
    ) {

    }

    @dispatch()
    loadAccounts = () => ({
        type: AccountActions.ACCOUNT_LOAD,
        meta: {},
        payload: null,
    })

    loadStarted = () => ({
        type: AccountActions.ACCOUNT_LOAD_STARTED,
        meta: {},
        payload: null,
    })

    loadSucceeded = (payload) => ({
        type: AccountActions.ACCOUNT_LOAD_OK,
        meta: {},
        payload,
    })

    loadFailed = (error) => ({
        type: AccountActions.ACCOUNT_LOAD_ERR,
        meta: {},
        payload: null,
        error,
    })

}
