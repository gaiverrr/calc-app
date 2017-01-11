import {Component, animate, trigger, transition, style, state} from '@angular/core';
import './calculation-container.css';

@Component({
    selector: 'calculation-container',
    animations: [
        trigger('flyInOut', [
            state('void', style({}) ),
            state('*', style({}) ),
            transition(':enter', [
                style({transform: 'translateX(100%)', opacity: 0}),
                animate('0.5s ease-in-out', style({transform: 'translateX(0%)', opacity: 1}))
            ]),
            transition(':leave', [
                style({transform: 'translateX(0%)', opacity: 1}),
                animate('0.5s ease-in-out', style({transform: 'translateX(-100%)', opacity: 0}))
            ])
        ])

        // trigger('flyInOut', [
        //     //state('in', style({transform: 'translateX(0)'})),
        //     transition('void => *', [
        //         style({transform: 'translateX(100%)', opacity: 0}),
        //         animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        //     ]),
        //     transition('* => void', [
        //         style({transform: 'translateX(0)', 'opacity': 1}),
        //         animate('500ms', style({transform: 'translateX(-100%)', opacity: 0}))
        //     ])
        // ])
    ],
    template: require('./calculation-container.html')
})
export class CalculationContainer {
    public toggle = true;

    toggleElement() {
        this.toggle = !this.toggle;
    }
}
