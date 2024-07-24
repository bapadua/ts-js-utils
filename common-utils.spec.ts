import { CommonUtils } from "./CommonUtils";

describe('CommonUtils', () => {
    it('should return valid 6 or less months difference', () => {
        const timeZone = 'America/Sao_Paulo';
        //1 month
        const startDate = '2021-05-31T00:00:00Z';
        const endDate = '2021-07-01T00:00:00Z';
        const diff1 = CommonUtils.calculateDateDiff(startDate, endDate, timeZone).diffInMonth;
        expect(diff1).toEqual(1);
        //2 months
        const startDate2 = '2021-05-31T00:00:00Z';
        const endDate2 = '2021-08-01T00:00:00Z';
        const diff2 = CommonUtils.calculateDateDiff(startDate2, endDate2, timeZone).diffInMonth;
        expect(diff2).toEqual(2);
        //3 months
        const startDate3 = '2021-05-31T00:00:00Z';
        const endDate3 = '2021-09-01T00:00:00Z';
        const diff3 = CommonUtils.calculateDateDiff(startDate3, endDate3, timeZone).diffInMonth;
        expect(diff3).toEqual(3);
        //4 months
        const startDate4 = '2021-05-31T00:00:00Z';
        const endDate4 = '2021-10-01T00:00:00Z';
        const diff4 = CommonUtils.calculateDateDiff(startDate4, endDate4, timeZone).diffInMonth;
        expect(diff4).toEqual(4);
        //5 months
        const startDate5 = '2021-05-31T00:00:00Z';
        const endDate5 = '2021-11-01T00:00:00Z';
        const diff5 = CommonUtils.calculateDateDiff(startDate5, endDate5, timeZone).diffInMonth;
        expect(diff5).toEqual(5);
        //6 months 
        const startDate6 = '2021-05-31T00:00:00Z';
        const endDate6 = '2021-12-01T00:00:00Z';
        const diff6 = CommonUtils.calculateDateDiff(startDate6, endDate6, timeZone).diffInMonth;
        expect(diff6).toEqual(6);

    });

    it('should return invalid 7 months difference', () => {
        const startDate = '2021-05-31T00:00:00Z';
        const endDate = '2022-01-01T00:00:00Z';
        const timeZone = 'UTC';
        const { diffInMonth } = CommonUtils.calculateDateDiff(startDate, endDate, timeZone);
        expect(diffInMonth).toEqual(7);
    });
});
