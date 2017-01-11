import {Component} from '@angular/core';

@Component({
    selector: 'main',
    template: require('./main.html')
})
export class Main {
    public hello: string;

    constructor() {
        this.hello = 'main component';
    }
}
