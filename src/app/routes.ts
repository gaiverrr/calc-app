import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainSection} from './components/main-section';

@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>'
})
export class RootComponent {
}

export const routes: Routes = [
    {
        path: '',
        component: MainSection
    }
];

export const routing = RouterModule.forRoot(routes);
