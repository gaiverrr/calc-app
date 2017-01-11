import {Component} from '@angular/core';

@Component({
    selector: 'input-number',
    template: require('./input-number.html')
})
export class InputNumber {
    public value: number;

    model = 'some text';

    constructor() {
        this.value = 0;
    }

    handleInput(id: string) {
        console.log(id);
    }

    handleChange(id: string) {
        console.log(id);
        console.log(this.model);
        //this.store.dispatch(actions.completeTodo(id));
    }
}
