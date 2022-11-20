import * as Array from "../../utilities/Array.js";
import * as HTMLDoubleElements from "../../utilities/HTMLDoubleElements.js";
export const Main = {
    NormaliseData(data) {
        switch (data.Version) {
            case 1:
                return data;
            default:
                console.error(`DifferenceComputer.IDifferenceComputer got unsupported data version: ${data.Version}`);
        }
    },
    ComputeDifference(data0, data1, locale, includeUnchangedData) {
        const DataCE_List = [[], []];
        const DataC_List = [];
        for (let stopData of data0.Stops) {
            DataC_List.push([stopData, undefined]);
        }
        for (let stopData of data1.Stops) {
            let stop = DataC_List.find((value) => { var _a; return (((_a = value[0]) === null || _a === void 0 ? void 0 : _a.StopNumber) === stopData.StopNumber); });
            if (stop !== undefined) {
                stop[1] = stopData;
            }
            else {
                DataC_List.push([undefined, stopData]);
            }
        }
        for (let stop of Array.SortWithAlphanumericCollator(DataC_List, (value) => { var _a; return (((_a = value[0]) === null || _a === void 0 ? void 0 : _a.StopNumber) || value[1].StopNumber); })) {
            const DataC = stop;
            if (DataC[0] === undefined) {
                const DataCE_Stop_Details = HTMLDoubleElements.CreateLinkedDetailsElements("", `${DataC[1].StopNumber} (${DataC[1].StopName})`);
                const DataCE_Stop_Details_Content = HTMLDoubleElements.CreateDoubleDivElements();
                const DataCE_Stop_Number = HTMLDoubleElements.CreateDoubleSpanElements("", `${locale.LocaleTable["Stop Number"]}: ${DataC[1].StopNumber}`);
                const DataCE_Stop_Name = HTMLDoubleElements.CreateDoubleSpanElements("", `${locale.LocaleTable["Stop Name"]}: ${DataC[1].StopName}`);
                const DataCE_Stop_Adress = HTMLDoubleElements.CreateDoubleSpanElements("", `${locale.LocaleTable["Stop Adress"]}: ${DataC[1].StopAdress}`);
                DataCE_Stop_Details[0].className = "Empty";
                DataCE_Stop_Details[1].className = "Added";
                DataCE_Stop_Details[0].appendChild(DataCE_Stop_Details_Content[0]);
                DataCE_Stop_Details_Content[0].appendChild(DataCE_Stop_Number[0]);
                DataCE_Stop_Details_Content[0].appendChild(DataCE_Stop_Name[0]);
                DataCE_Stop_Details_Content[0].appendChild(DataCE_Stop_Adress[0]);
                DataCE_Stop_Details[1].appendChild(DataCE_Stop_Details_Content[1]);
                DataCE_Stop_Details_Content[1].appendChild(DataCE_Stop_Number[1]);
                DataCE_Stop_Details_Content[1].appendChild(DataCE_Stop_Name[1]);
                DataCE_Stop_Details_Content[1].appendChild(DataCE_Stop_Adress[1]);
                DataCE_List[0].push(DataCE_Stop_Details[0]);
                DataCE_List[1].push(DataCE_Stop_Details[1]);
                continue;
            }
            if (DataC[1] === undefined) {
                const DataCE_Stop_Details = HTMLDoubleElements.CreateLinkedDetailsElements(`${DataC[0].StopNumber} (${DataC[0].StopName})`, "");
                const DataCE_Stop_Details_Content = HTMLDoubleElements.CreateDoubleDivElements();
                const DataCE_Stop_Number = HTMLDoubleElements.CreateDoubleSpanElements(`${locale.LocaleTable["Stop Number"]}: ${DataC[0].StopNumber}`, "");
                const DataCE_Stop_Name = HTMLDoubleElements.CreateDoubleSpanElements(`${locale.LocaleTable["Stop Name"]}: ${DataC[0].StopName}`, "");
                const DataCE_Stop_Adress = HTMLDoubleElements.CreateDoubleSpanElements(`${locale.LocaleTable["Stop Adress"]}: ${DataC[0].StopAdress}`, "");
                DataCE_Stop_Details[0].className = "Removed";
                DataCE_Stop_Details[1].className = "Empty";
                DataCE_Stop_Details[0].appendChild(DataCE_Stop_Details_Content[0]);
                DataCE_Stop_Details_Content[0].appendChild(DataCE_Stop_Number[0]);
                DataCE_Stop_Details_Content[0].appendChild(DataCE_Stop_Name[0]);
                DataCE_Stop_Details_Content[0].appendChild(DataCE_Stop_Adress[0]);
                DataCE_Stop_Details[1].appendChild(DataCE_Stop_Details_Content[1]);
                DataCE_Stop_Details_Content[1].appendChild(DataCE_Stop_Number[1]);
                DataCE_Stop_Details_Content[1].appendChild(DataCE_Stop_Name[1]);
                DataCE_Stop_Details_Content[1].appendChild(DataCE_Stop_Adress[1]);
                DataCE_List[0].push(DataCE_Stop_Details[0]);
                DataCE_List[1].push(DataCE_Stop_Details[1]);
                continue;
            }
            //If both stops exist, this code will run.
            {
                const Is_StopName_Same = DataC[0].StopName === DataC[1].StopName;
                const Is_StopAdress_Same = DataC[0].StopAdress === DataC[1].StopAdress;
                const Is_Stop_Same = (Is_StopName_Same && Is_StopAdress_Same) === true;
                if ((Is_Stop_Same === true) && (includeUnchangedData === false)) {
                    continue;
                }
                const DataCE_Stop_Details = HTMLDoubleElements.CreateLinkedDetailsElements(`${DataC[0].StopNumber} (${DataC[0].StopName})`, `${DataC[1].StopNumber} (${DataC[1].StopName})`);
                const DataCE_Stop_Details_Content = HTMLDoubleElements.CreateDoubleDivElements();
                const DataCE_Stop_Number = HTMLDoubleElements.CreateDoubleSpanElements(`${locale.LocaleTable["Stop Number"]}: ${DataC[0].StopNumber}`);
                const DataCE_Stop_Name = HTMLDoubleElements.CreateDoubleSpanElements(`${locale.LocaleTable["Stop Name"]}: ${DataC[0].StopName}`, `${locale.LocaleTable["Stop Name"]}: ${DataC[1].StopName}`);
                const DataCE_Stop_Adress = HTMLDoubleElements.CreateDoubleSpanElements(`${locale.LocaleTable["Stop Adress"]}: ${DataC[0].StopAdress}`, `${locale.LocaleTable["Stop Adress"]}: ${DataC[1].StopAdress}`);
                DataCE_Stop_Details[0].appendChild(DataCE_Stop_Details_Content[0]);
                DataCE_Stop_Details_Content[0].appendChild(DataCE_Stop_Number[0]);
                DataCE_Stop_Details_Content[0].appendChild(DataCE_Stop_Name[0]);
                DataCE_Stop_Details_Content[0].appendChild(DataCE_Stop_Adress[0]);
                DataCE_Stop_Details[1].appendChild(DataCE_Stop_Details_Content[1]);
                DataCE_Stop_Details_Content[1].appendChild(DataCE_Stop_Number[1]);
                DataCE_Stop_Details_Content[1].appendChild(DataCE_Stop_Name[1]);
                DataCE_Stop_Details_Content[1].appendChild(DataCE_Stop_Adress[1]);
                if (Is_Stop_Same === true) {
                    DataCE_Stop_Details[0].className = DataCE_Stop_Details[1].className = "None";
                }
                else {
                    DataCE_Stop_Details[0].className = DataCE_Stop_Details[1].className = "Changed";
                    DataCE_Stop_Number[0].className = DataCE_Stop_Number[1].className = "None";
                    DataCE_Stop_Name[0].className = DataCE_Stop_Name[1].className = (Is_StopName_Same ? "None" : "");
                    DataCE_Stop_Adress[0].className = DataCE_Stop_Adress[1].className = (Is_StopAdress_Same ? "None" : "");
                }
                DataCE_List[0].push(DataCE_Stop_Details[0]);
                DataCE_List[1].push(DataCE_Stop_Details[1]);
                continue;
            }
        }
        return DataCE_List;
    }
};
