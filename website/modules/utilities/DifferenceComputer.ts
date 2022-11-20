import * as Locale from "./Locale.js"

export interface IDifferenceComputer<TDataSchema_vC, TDataSchema_vA> {
    readonly NormaliseData: <TDataSchema extends TDataSchema_vA>(data: TDataSchema) => (TDataSchema_vC)
    readonly ComputeDifference: (data0: TDataSchema_vC, data1: TDataSchema_vC, locale: Locale.Locale, includeUnchangedData: boolean) => ([HTMLElement[], HTMLElement[]])
}