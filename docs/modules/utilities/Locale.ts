export type Locale = {
    readonly LocaleName: string,
    readonly LocaleFullName: string,

    readonly LocaleTable: {
        readonly "EGO Route Tracker": string,

        readonly "Route Number": string,
        readonly "Route Name": string,
        readonly "Route Type": string,
        readonly "Route Departures": string,
        readonly "Weekdays": string,
        readonly "Saturday": string,
        readonly "Sunday": string,

        readonly "Stop Number": string,
        readonly "Stop Name": string,
        readonly "Stop Adress": string
    }
}

export const Locales: Locale[] = [
    {
        LocaleName: "en-GB",
        LocaleFullName: "English (United Kingdom) [en-GB]",

        LocaleTable: {
            "EGO Route Tracker": "EGO Route Tracker",

            "Route Number": "Route Number",
            "Route Name": "Route Name",
            "Route Type": "Route Type",
            "Route Departures": "Route Departures",
            "Weekdays": "Weekdays",
            "Saturday": "Saturday",
            "Sunday": "Sunday",

            "Stop Number": "Stop Number",
            "Stop Name": "Stop Name",
            "Stop Adress": "Stop Adress"
        }
    },

    {
        LocaleName: "tr-TR",
        LocaleFullName: "Türkçe (Türkiye) [tr-TR]",

        LocaleTable: {
            "EGO Route Tracker": "EGO Hat Takipçisi",

            "Route Number": "Hat Numarası",
            "Route Name": "Hat Adı",
            "Route Type": "Hat Tipi",
            "Route Departures": "Hat Kalkış Takvimi",
            "Weekdays": "Hafta İçi",
            "Saturday": "Cumartesi",
            "Sunday": "Pazar",

            "Stop Number": "Durak Numarası",
            "Stop Name": "Durak Adı",
            "Stop Adress": "Durak Adresi"
        }
    }
]