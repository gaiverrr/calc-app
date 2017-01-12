import {HeaderSection} from './header-section';
import {TestBed, async} from '@angular/core/testing';

describe('hello component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeaderSection
            ]
        });
        TestBed.compileComponents();
    }));

    it('should render Powerful Math', () => {
        const fixture = TestBed.createComponent(HeaderSection);
        fixture.detectChanges();
        const element = fixture.nativeElement;
        expect(element.querySelector('header').textContent).toBe('Powerful Math');
    });
});
