import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';


// The top-level reducers and epics that make up our app's logic.
import { IAppState } from './IAppState';
import { rootReducer } from './reducers';
import { RootEpics } from './epics';

@NgModule({
    imports: [
        CommonModule,
        NgReduxModule,
        NgReduxRouterModule
    ],
    providers: [RootEpics],
    declarations: []
})
export class ReduxModule {
    constructor(
        public store: NgRedux<IAppState>,
        devTools: DevToolsExtension,
        ngReduxRouter: NgReduxRouter,
        rootEpics: RootEpics,
    ) {


        store.configureStore(
            rootReducer,
            {},
            [...rootEpics.createEpics()],
            devTools.isEnabled() ? [devTools.enhancer()] : []
        );


        if (ngReduxRouter) {
            ngReduxRouter.initialize();
        }

    }
}
