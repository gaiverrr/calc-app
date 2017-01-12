import {Component, animate, trigger, transition, style} from '@angular/core';
import {MathService} from '../services/math';

@Component({
    selector: 'calculation-container',
    animations: [
        trigger('flyInOut', [
            transition(':enter', [
                style({transform: 'translateX(100%)', opacity: 0}),
                animate('1.5s ease-in-out', style({transform: 'translateX(0%)', opacity: 1}))
            ]),
            transition(':leave', [
                style({transform: 'translateX(0%)', opacity: 1}),
                animate('0.5s ease-in-out', style({transform: 'translateX(-1000%)', opacity: 0}))
            ])
        ])
    ],
    providers: [MathService],
    template: require('./calculation-container.html')
})

export class CalculationContainer {
    public firstSummand: number;
    public secondSummand: number;
    public result: number;
    public toggle: boolean;
    public success: boolean;


    constructor(private mathService: MathService) {
        this.firstSummand = 0;
        this.secondSummand = 0;
        this.toggle = true;
        this.success = true;
    }

    calculate(a: string, b: string) {
        this.toggle = !this.toggle;
        this.mathService.sum(a, b).then(mathResult => {
            this.success = mathResult.success;
            return this.result = mathResult.result;
        });
    }

    reset() {
        this.firstSummand = 0;
        this.secondSummand = 0;
        this.toggle = true;
    }

}
