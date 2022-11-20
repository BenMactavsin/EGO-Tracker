const Alphanumeric_Collator = new Intl.Collator(undefined, {
    caseFirst: "false",
    ignorePunctuation: true,
    numeric: true,
    sensitivity: "base",
    usage: "sort"
});
//Functions
export function SortWithAlphanumericCollator(array, stringConverter) {
    return array.sort((value0, value1) => (Alphanumeric_Collator.compare(stringConverter(value0), stringConverter(value1))));
}
//TODO: Reduce "(value0 as unknown)" to "value0")
export function JoinWithoutDuplicates(array0 = [], array1 = [], comparer = (value0, value1) => (value0 === value1)) {
    let arrayC = Object.assign([], array0);
    for (let value1 of array1) {
        if (arrayC.find((value0) => (comparer(value0, value1))) === undefined) {
            arrayC.push(value1);
        }
    }
    return arrayC;
}
