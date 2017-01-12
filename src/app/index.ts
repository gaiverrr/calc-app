import {NgModule} from '@angular/core';
import {HttpModule}    from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {MainSection} from './components/main-section';
import {HeaderSection} from './components/header-section';
import {CalculationContainer} from './components/calculation-container';
import {InputNumber} from './components/input-number';

import {MathService} from './services/math';


@NgModule({
    imports: [
        BrowserModule,
        routing,
        HttpModule,
    ],
    declarations: [
        RootComponent,
        MainSection,
        HeaderSection,
        CalculationContainer,
        InputNumber
    ],
    providers: [MathService],
    bootstrap: [RootComponent]
})
export class AppModule {
}
