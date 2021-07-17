class Translation {
    arabic: number;
    roman: string;
    constructor(arabic: number, roman: string) {
        this.arabic = arabic;
        this.roman = roman;
    };
    starts(str: string): boolean {
        return str.startsWith(this.roman);
    };
    bigEnough(num: number): boolean {
        return num >= this.arabic;
    };
};

export default class Roman {

    data: Translation[] = [
        new Translation(1, 'I'),
        new Translation(4, 'IV'),
        new Translation(5, 'V'),
        new Translation(9, 'IX'),
        new Translation(10, 'X'),
        new Translation(40, 'XL'),
        new Translation(50, 'L'),
        new Translation(90, 'XC'),
        new Translation(100, 'C'),
        new Translation(400, 'CD'),
        new Translation(500, 'D'),
        new Translation(900, 'CM'),
        new Translation(1000, 'M')
    ];

    constructor() {
        this.data.reverse();
    };

    toRoman(num: number): string {
        let result: string = '';
        this.data.forEach((elem: Translation) => {
            while (elem.bigEnough(num)) {
                result += elem.roman;
                num -= elem.arabic;
            }
        });
        return result;
    };

    toArabic(str: string): number {
        let result: number = 0;
        this.data.forEach((elem: Translation) => {
            while (elem.starts(str)) {
                result += elem.arabic;
                str = str.substring(elem.roman.length);
            }
        });
        return result;
    };
};
