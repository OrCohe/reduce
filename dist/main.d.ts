interface CountryObject {
    name: string;
    city: string;
    country: string;
}
interface SortedData {
    [country: string]: {
        [city: string]: string[];
    };
}
interface MinMax {
    min: number;
    max: number;
}
declare const arrNumbers: number[];
declare const sum: number;
declare const minMax: MinMax;
declare const arrObjects: CountryObject[];
declare const sortedData: SortedData;
//# sourceMappingURL=main.d.ts.map