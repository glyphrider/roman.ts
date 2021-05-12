interface ITranslation {
    arabic: number,
    roman: string
};

export default class Roman {

    data: Array<ITranslation> = [
        { arabic: 1, roman: 'I' },
        { arabic: 4, roman: 'IV' },
        { arabic: 5, roman: 'V' },
        { arabic: 9, roman: 'IX' },
        { arabic: 10, roman: 'X' },
        { arabic: 40, roman: 'XL' },
        { arabic: 50, roman: 'L' },
	{ arabic: 90, roman: 'XC' },
	{ arabic: 100, roman: 'C' },
	{ arabic: 400, roman: 'CD' },
	{ arabic: 500, roman: 'D' },
	{ arabic: 900, roman: 'CM' },
	{ arabic: 1000, roman: 'M' }
    ];

    constructor() {
        this.data.reverse();
    };

    toRoman(num: number): string {
        let result: string = '';
        this.data.forEach((elem: ITranslation) => {
            while(num >= elem.arabic) {
                result += elem.roman;
                num -= elem.arabic;
            }
        });
        return result;
    };

    toArabic(str: string): number {
        let result: number = 0;
        this.data.forEach((elem: ITranslation) => {
            while(str.startsWith(elem.roman)) {
                result += elem.arabic;
                str = str.substring(elem.roman.length);
            }
        });
        return result;
    };
};
