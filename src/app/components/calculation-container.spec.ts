import {CalculationContainer} from './calculation-container';
import {InputNumber} from './input-number';
import {TestBed, async} from '@angular/core/testing';
import {HttpModule}    from '@angular/http';
import {MathService} from '../services/math';

describe('calculation component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
            ],

            providers: [MathService],
            declarations: [
                CalculationContainer,
                InputNumber
            ]
        });
        TestBed.compileComponents();
    }));
    it('check count of summands', () => {
        expect(true).toBe(true);
    });

    it('check count of summands', () => {
        const fixture = TestBed.createComponent(CalculationContainer);
        fixture.detectChanges();
        const element = fixture.nativeElement;
        expect(element.querySelectorAll('.calculattion-container__element[contenteditable]').length).toBe(2);
    });
    it('check default values', () => {
        const fixture = TestBed.createComponent(CalculationContainer);
        fixture.detectChanges();
        const elements = fixture.nativeElement.querySelectorAll('.calculattion-container__element[contenteditable]');
        expect(parseInt(elements[0].textContent)).toBe(0);
        expect(parseInt(elements[1].textContent)).toBe(0);
    });
});
