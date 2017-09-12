import { Injectable } from '@angular/core';
import { Epic, createEpicMiddleware } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';

import { IAppState } from '../../core/redux/IAppState';
import { AccountActions } from './account.actions';

import { AccountAPIService } from './account.services';

const accountNotAlreadyFetched = (state: IAppState): boolean => !(
    state.accounts &&
    state.accounts.items &&
    Object.keys(state.accounts.items).length);

@Injectable()
export class AccountAPIEpics {
    constructor(
        private service: AccountAPIService,
        private actions: AccountActions,
    ) { }

    public createEpic() {
        return createEpicMiddleware(this.createLoadAccountEpic());
    }

    private createLoadAccountEpic(): Epic<any, IAppState> {
        return (action$, store) => {
            return action$.ofType(AccountActions.ACCOUNT_LOAD)
                .filter(() => accountNotAlreadyFetched(store.getState()))
                .switchMap(() => this.service.getAll()
                    .map(data => this.actions.loadSucceeded(data))
                    .catch(response => of(this.actions.loadFailed({
                        status: '' + response.status,
                    })))
                    .startWith(this.actions.loadStarted()));
        };
    }

}
