import {expect} from 'code';
import {getSocialSecurity} from '../../../src/calculators/social-security';

describe('Given the social security calculator', () => {

    context('and the gross income is `90000`', () => {

        it('should have the correct social security', () => {

            const grossIncome = 90000;
            const expectedSocialSecurityTax = 6885;

            const actualSocialSecurityTax = getSocialSecurity(grossIncome, 'SINGLE');

            expect(actualSocialSecurityTax).number().equal(expectedSocialSecurityTax);

        });

    });

    context('and the gross income is `300000`', () => {

        it('should have the correct social security', () => {

            const grossIncome = 300000;
            const expectedSocialSecurityTax = 12597;

            const actualSocialSecurityTax = getSocialSecurity(grossIncome, 'SINGLE');

            expect(actualSocialSecurityTax).number().equal(expectedSocialSecurityTax);

        });

    });

    context('and the gross income is `56756`', () => {

        it('should have the correct social security', () => {

            const grossIncome = 56756;
            const expectedSocialSecurityTax = 4341.83;

            const actualSocialSecurityTax = getSocialSecurity(grossIncome, 'SINGLE');

            expect(actualSocialSecurityTax).number().equal(expectedSocialSecurityTax);

        });

    });

});
