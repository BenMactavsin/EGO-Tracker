var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as HTTP from "./modules/utilities/HTTP.js";
import * as HTMLDoubleElements from "./modules/utilities/HTMLDoubleElements.js";
import * as Locale from "./modules/utilities/Locale.js";
const Difference_ListCE = HTMLDoubleElements.CreateLinkedDivElements();
Difference_ListCE[0].className = Difference_ListCE[1].className = "difference-list";
Difference_ListCE[0].id = "difference-list-0";
Difference_ListCE[1].id = "difference-list-1";
document.body.appendChild(Difference_ListCE[0]);
document.body.appendChild(Difference_ListCE[1]);
const Current_Location = window.location;
const Search_Parameters = new URLSearchParams("?locale=tr-TR&differenceType=stopData&includeUnchangedData=false&commit0=384ff19e1b17656bf24f1d5459d4b8ae84877fc2&commit1=a7ffb6dcfa3f7f72a9feee48f187864cebae5086" /* "?locale=tr-TR&differenceType=routeData&includeUnchangedData=false&commit0=5cc805d0c12857e9e2cd2bfc293f71bcb403ff6c&commit1=4df5735127d4e3c4a4b5fb3b782fd9ee0d94d4cf" */ /* Current_Location.search */);
function RenderWebpage() {
    return __awaiter(this, void 0, void 0, function* () {
        const Locale_Name = Search_Parameters.get("locale");
        const Locale_Data = Locale.Locales.find((value) => (value.LocaleName === Locale_Name)) || Locale.Locales.find((value) => (value.LocaleName === "tr-TR"));
        document.querySelector("title").textContent = Locale_Data.LocaleTable["EGO Route Tracker"];
        switch (Search_Parameters.get("differenceType")) {
            case "routeData":
                {
                    const Difference_Computer = (yield import("./modules/IDifferenceComputer/routeData/main.js")).Main;
                    const Data0 = Difference_Computer.NormaliseData(yield HTTP.GetAsyncJSON(`https://raw.githubusercontent.com/Mactavsin/EGO-Route-Tracker/${Search_Parameters.get("commit0")}/EGO-Data/RouteData.json`));
                    const Data1 = Difference_Computer.NormaliseData(yield HTTP.GetAsyncJSON(`https://raw.githubusercontent.com/Mactavsin/EGO-Route-Tracker/${Search_Parameters.get("commit1")}/EGO-Data/RouteData.json`));
                    const Computed_DataCE_List = Difference_Computer.ComputeDifference(Data0, Data1, Locale_Data, (Search_Parameters.get("includeUnchangedData") || "false") === "true");
                    for (let computedDataElement of Computed_DataCE_List[0]) {
                        Difference_ListCE[0].appendChild(computedDataElement);
                    }
                    for (let computedDataElement of Computed_DataCE_List[1]) {
                        Difference_ListCE[1].appendChild(computedDataElement);
                    }
                }
                break;
            case "stopData":
                {
                    const Difference_Computer = (yield import("./modules/IDifferenceComputer/stopData/main.js")).Main;
                    const Data0 = Difference_Computer.NormaliseData(yield HTTP.GetAsyncJSON(`https://raw.githubusercontent.com/Mactavsin/EGO-Route-Tracker/${Search_Parameters.get("commit0")}/EGO-Data/StopData.json`));
                    const Data1 = Difference_Computer.NormaliseData(yield HTTP.GetAsyncJSON(`https://raw.githubusercontent.com/Mactavsin/EGO-Route-Tracker/${Search_Parameters.get("commit1")}/EGO-Data/StopData.json`));
                    const Computed_DataCE_List = Difference_Computer.ComputeDifference(Data0, Data1, Locale_Data, (Search_Parameters.get("includeUnchangedData") || "false") === "true");
                    for (let computedDataElement of Computed_DataCE_List[0]) {
                        Difference_ListCE[0].appendChild(computedDataElement);
                    }
                    for (let computedDataElement of Computed_DataCE_List[1]) {
                        Difference_ListCE[1].appendChild(computedDataElement);
                    }
                }
                break;
            default:
        }
    });
}
RenderWebpage();
