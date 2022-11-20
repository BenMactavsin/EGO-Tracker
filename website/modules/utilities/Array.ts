const Alphanumeric_Collator: Intl.Collator = new Intl.Collator(undefined, {
    caseFirst: "false",
    ignorePunctuation: true,
    numeric: true,
    sensitivity: "base",
    usage: "sort"
})

//Functions
export function SortWithAlphanumericCollator<TValue>(array: TValue[], stringConverter: (value: TValue) => (string)): (TValue[]) {
    return array.sort((value0: TValue, value1: TValue) => (Alphanumeric_Collator.compare(stringConverter(value0), stringConverter(value1))))
}

//TODO: Reduce "(value0 as unknown)" to "value0")
export function JoinWithoutDuplicates<TValue0, TValue1>(array0: TValue0[] = [], array1: TValue1[] = [], comparer: (value0: TValue0, value1: TValue1) => (boolean) = (value0: TValue0, value1: TValue1) => ((value0 as unknown) === value1)): ((TValue0 | TValue1)[]) {
    let arrayC: (TValue0 | TValue1)[] = Object.assign([], array0)

    for (let value1 of array1) {
        if (arrayC.find((value0: TValue0) => (comparer(value0, value1))) === undefined) {
            arrayC.push(value1)
        }
    }

    return arrayC
}