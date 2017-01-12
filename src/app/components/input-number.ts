import {Component} from '@angular/core';

@Component({
    selector: 'input-number',
    template: require('./input-number.html')
})
export class InputNumber {
    public value: string;
    public invalid: boolean;

    constructor() {
        this.value = '0';
    }

    handleChange(value: string) {
        if (isNaN(+value)) {
            this.invalid = true;
        } else {
            this.invalid = false;
        }
        this.value = value;
    }
}
