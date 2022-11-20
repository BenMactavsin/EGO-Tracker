import * as HTTP from "./modules/utilities/HTTP.js"
import * as HTMLDoubleElements from "./modules/utilities/HTMLDoubleElements.js"
import * as Locale from "./modules/utilities/Locale.js"

const Difference_ListCE: [HTMLDivElement, HTMLDivElement] = HTMLDoubleElements.CreateLinkedDivElements()

Difference_ListCE[0].className = Difference_ListCE[1].className = "difference-list"

Difference_ListCE[0].id = "difference-list-0"
Difference_ListCE[1].id = "difference-list-1"

document.body.appendChild(Difference_ListCE[0])
document.body.appendChild(Difference_ListCE[1])

const Current_Location: Location = window.location
const Search_Parameters: URLSearchParams = new URLSearchParams(Current_Location.search)

async function RenderWebpage(): Promise<void> {
    const Locale_Name: string = Search_Parameters.get("locale")
    const Locale_Data: Locale.Locale = Locale.Locales.find((value: Locale.Locale) => (value.LocaleName === Locale_Name)) || Locale.Locales.find((value: Locale.Locale) => (value.LocaleName === "tr-TR"))

    document.querySelector("title").textContent = Locale_Data.LocaleTable["EGO Route Tracker"]

    switch(Search_Parameters.get("differenceType")) {
        case "routeData":
            {
                const Difference_Computer = (await import("./modules/IDifferenceComputer/routeData/main.js")).Main

                const Data0 = Difference_Computer.NormaliseData(await HTTP.GetAsyncJSON(`https://raw.githubusercontent.com/Mactavsin/EGO-Route-Tracker/${Search_Parameters.get("commit0")}/EGO-Data/RouteData.json`))
                const Data1 = Difference_Computer.NormaliseData(await HTTP.GetAsyncJSON(`https://raw.githubusercontent.com/Mactavsin/EGO-Route-Tracker/${Search_Parameters.get("commit1")}/EGO-Data/RouteData.json`))
    
                const Computed_DataCE_List: [HTMLElement[], HTMLElement[]] = Difference_Computer.ComputeDifference(Data0, Data1, Locale_Data, (Search_Parameters.get("includeUnchangedData") || "false") === "true")
    
                for (let computedDataElement of Computed_DataCE_List[0]) {
                    Difference_ListCE[0].appendChild(computedDataElement)
                }
    
                for (let computedDataElement of Computed_DataCE_List[1]) {
                    Difference_ListCE[1].appendChild(computedDataElement)
                }
            }
            
            break
        case "stopData":
            {
                const Difference_Computer = (await import("./modules/IDifferenceComputer/stopData/main.js")).Main

                const Data0 = Difference_Computer.NormaliseData(await HTTP.GetAsyncJSON(`https://raw.githubusercontent.com/Mactavsin/EGO-Route-Tracker/${Search_Parameters.get("commit0")}/EGO-Data/StopData.json`))
                const Data1 = Difference_Computer.NormaliseData(await HTTP.GetAsyncJSON(`https://raw.githubusercontent.com/Mactavsin/EGO-Route-Tracker/${Search_Parameters.get("commit1")}/EGO-Data/StopData.json`))
    
                const Computed_DataCE_List: [HTMLElement[], HTMLElement[]] = Difference_Computer.ComputeDifference(Data0, Data1, Locale_Data, (Search_Parameters.get("includeUnchangedData") || "false") === "true")

                for (let computedDataElement of Computed_DataCE_List[0]) {
                    Difference_ListCE[0].appendChild(computedDataElement)
                }

                for (let computedDataElement of Computed_DataCE_List[1]) {
                    Difference_ListCE[1].appendChild(computedDataElement)
                }
            }

            break
        default:
    }
}

RenderWebpage()