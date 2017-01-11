import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {MainSection} from './components/main-section';
import {HeaderSection} from './components/header-section';
import {CalculationContainer} from './components/calculation-container';
import {InputNumber} from './components/input-number';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        RootComponent,
        MainSection,
        HeaderSection,
        CalculationContainer,
        InputNumber
    ],
    bootstrap: [RootComponent]
})
export class AppModule {
}
