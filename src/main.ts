interface CountryObject {
    name: string;
    city: string;
    country: string;
}

interface SortedData {
    [country: string]: {
        [city: string]: string[];
    }
}

interface MinMax {
    min: number;
    max: number;
}

const arrNumbers: number[] = [1, 2, 3, 44, 5, 6, 7, 8, 9, 88, -15];

const sum: number = arrNumbers.reduce((acc, number) => acc + number, 0);
const minMax: MinMax = arrNumbers.reduce((acc, number) => {
    return ({
        min: Math.min(acc.min, number),
        max: Math.max(acc.max, number),
    })
}, { min: Infinity, max: -Infinity });

console.log('sum: ', sum);
console.log('minMax: ', minMax);

const arrObjects: CountryObject[] = [
    { name: 'Aaa', city: 'Tel Aviv', country: 'Israel' },
    { name: 'Bbb', city: 'Tel Aviv', country: 'Israel' },
    { name: 'Ccc', city: 'Ramat Gan', country: 'Israel' },
    { name: 'Ddd', city: 'New York', country: 'USA' },
    { name: 'Eee', city: 'Miami', country: 'USA' },
    { name: 'Fff', city: 'Sydney', country: 'Australia' },
    { name: 'Ggg', city: 'Melbourne', country: 'Australia' },
    { name: 'Hhh', city: 'Cairns', country: 'Australia' },
    { name: 'Iii', city: 'Auckland', country: 'New Zealand' },
    { name: 'Jjj', city: 'Christchurch', country: 'New Zealand' },
    { name: 'Kkk', city: 'Paris', country: 'France' },
    { name: 'Lll', city: 'Athens', country: 'Greece' },
    { name: 'Mmm', city: 'Berlin', country: 'Germany' },
];

const sortedData: SortedData = arrObjects.reduce((acc: SortedData, object): SortedData => {
    const { country, city, name } = object;
    let newAcc = { ...acc };
    if (acc[country]) {
        if (acc[country][city]) {
            newAcc[country][city].push(name);
        } else {
            newAcc[country] = {
                ...newAcc[country],
                [city]: [name]
            }
        }
    } else {
        newAcc = {
            ...newAcc,
            [country]: {
                [city]: [name]
            }
        }
    }
    return newAcc
}, {});

console.log(sortedData)
console.log('1', arrObjects.filter(object => object.country === 'Australia' && object.city === 'Cairns').map(object => object.name));
console.log('2', sortedData?.Australia?.Cairns);