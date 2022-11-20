//DataSchema_v1
type DataSchema_v1 = {
    readonly Version: 1,
    readonly PreviousCommit: string,
    readonly Stops: {
        readonly StopNumber: string,
        readonly StopName: string,
        readonly StopAdress: string
    }[]
}

//DataSchema_vC
export type DataSchema_vC = DataSchema_v1

//DataSchema_vA
export type DataSchema_vA = DataSchema_v1