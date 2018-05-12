import { InumerologyCalculator } from "./inumerology-calculator";

export class NumerologyCalculator implements InumerologyCalculator {
    private _birthYear: number;
    private _birthMonth: number;
    private _birthDay: number;

    constructor(_birthYear: number,_birthMonth: number,_birthDay: number){
        this._birthYear = _birthYear;
        this._birthMonth = _birthMonth;
        this._birthDay = _birthDay;
    }

    getLifeNumerology(): number
    {
        let str = this._birthYear.toString() + this._birthMonth.toString() + this._birthDay.toString();
        
        while(str.length != 1)
        {
            var lifeNum = 0;
            for(var i=0;i<str.length;i++)
            {
                lifeNum += parseInt(str[i]);
            }
            str = lifeNum.toString();
        }

        return parseInt(str);
    }

    getAstrologyConstellationName(): string
    {
        var m = this._birthMonth;
        var d = this._birthDay;

        if( (m == 3 && d >= 21) || (m == 4 && d <= 19) ) return "aries";
        if( (m == 4 && d >= 20) || (m == 5 && d <= 20) ) return "taurus";
        if( (m == 5 && d >= 21) || (m == 6 && d <= 21) ) return "gemini";
        if( (m == 6 && d >= 22) || (m == 7 && d <= 22) ) return "cancer";
        if( (m == 7 && d >= 23) || (m == 8 && d <= 22) ) return "leo";
        if( (m == 8 && d >= 23) || (m == 9 && d <= 22) ) return "virgo";
        if( (m == 9 && d >= 23) || (m == 10 && d <= 23) ) return "libra";
        if( (m == 10 && d >= 24) || (m == 11 && d <= 21) ) return "scorpio";
        if( (m == 11 && d >= 22) || (m == 12 && d <= 20) ) return "sagittarius";
        if( (m == 12 && d >= 21) || (m == 1 && d <= 20) ) return "capricorn";
        if( (m == 1 && d >= 21) || (m == 2 && d <= 19) ) return "aquarius";
        if( (m == 2 && d >= 20) || (m == 3 && d <= 20) ) return "pisces";
    }
}
