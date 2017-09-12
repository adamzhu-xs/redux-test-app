import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing.module';
import { ReduxModule } from './core/redux/redux.module';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        ReduxModule,
        DashboardModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
