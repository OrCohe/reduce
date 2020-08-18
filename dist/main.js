"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
var arrNumbers = [1, 2, 3, 44, 5, 6, 7, 8, 9, 88, -15];
var sum = arrNumbers.reduce(function (acc, number) { return acc + number; }, 0);
var minMax = arrNumbers.reduce(function (acc, number) {
    return ({
        min: Math.min(acc.min, number),
        max: Math.max(acc.max, number),
    });
}, { min: Infinity, max: -Infinity });
console.log('sum: ', sum);
console.log('minMax: ', minMax);
var arrObjects = [
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
var sortedData = arrObjects.reduce(function (acc, object) {
    var _a, _b, _c;
    var country = object.country, city = object.city, name = object.name;
    var newAcc = __assign({}, acc);
    if (acc[country]) {
        if (acc[country][city]) {
            newAcc[country][city].push(name);
        }
        else {
            newAcc[country] = __assign(__assign({}, newAcc[country]), (_a = {}, _a[city] = [name], _a));
        }
    }
    else {
        newAcc = __assign(__assign({}, newAcc), (_b = {}, _b[country] = (_c = {},
            _c[city] = [name],
            _c), _b));
    }
    return newAcc;
}, {});
setInterval(function () {
    var x = 1 + 1;
    console.log(x);
}, 3000);
console.log(sortedData);
console.log('1', arrObjects.filter(function (object) { return object.country === 'Australia' && object.city === 'Cairns'; }).map(function (object) { return object.name; }));
console.log('2', (_a = sortedData === null || sortedData === void 0 ? void 0 : sortedData.Australia) === null || _a === void 0 ? void 0 : _a.Cairns);
//# sourceMappingURL=main.js.map