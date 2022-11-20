//DataSchema_v1
type DataSchema_v1 = {
    readonly Version: 1,
    readonly PreviousCommit: string,
    readonly Routes: {
        readonly RouteNumber: string,
        readonly RouteName: string,
        readonly RouteType: string,
        readonly RouteDepartures: {
            readonly Weekdays: string[],
            readonly Saturday: string[],
            readonly Sunday: string[]
        },
        readonly RouteStops: string[]
    }[]
}

//DataSchema_vC
export type DataSchema_vC = DataSchema_v1

//DataSchema_vA
export type DataSchema_vA = DataSchema_v1