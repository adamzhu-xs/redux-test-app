import { Injectable } from '@angular/core';

import { AccountAPIEpics } from '../../dashboard/redux/account.epics';

@Injectable()
export class RootEpics {
    constructor(private accountEpics: AccountAPIEpics) { }

    public createEpics() {
        return [
            this.accountEpics.createEpic()
        ];
    }
}
