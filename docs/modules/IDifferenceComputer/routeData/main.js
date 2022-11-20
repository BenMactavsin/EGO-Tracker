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
        for (let routeData of data0.Routes) {
            DataC_List.push([routeData, undefined]);
        }
        for (let routeData of data1.Routes) {
            let route = DataC_List.find((value) => { var _a; return (((_a = value[0]) === null || _a === void 0 ? void 0 : _a.RouteNumber) === routeData.RouteNumber); });
            if (route !== undefined) {
                route[1] = routeData;
            }
            else {
                DataC_List.push([undefined, routeData]);
            }
        }
        for (let route of Array.SortWithAlphanumericCollator(DataC_List, (value) => { var _a; return (((_a = value[0]) === null || _a === void 0 ? void 0 : _a.RouteNumber) || value[1].RouteNumber); })) {
            const DataC = route;
            if (DataC[0] === undefined) {
                const DataCE_Route_Details = HTMLDoubleElements.CreateLinkedDetailsElements("", `${DataC[1].RouteNumber} (${DataC[1].RouteName})`);
                const DataCE_Route_Details_Content = HTMLDoubleElements.CreateDoubleDivElements();
                const DataCE_Route_Number = HTMLDoubleElements.CreateDoubleSpanElements("", `${locale.LocaleTable["Route Number"]}: ${DataC[1].RouteNumber}`);
                const DataCE_Route_Name = HTMLDoubleElements.CreateDoubleSpanElements("", `${locale.LocaleTable["Route Name"]}: ${DataC[1].RouteName}`);
                const DataCE_Route_Type = HTMLDoubleElements.CreateDoubleSpanElements("", `${locale.LocaleTable["Route Type"]}: ${DataC[1].RouteType}`);
                const DataCE_Route_Departures = HTMLDoubleElements.CreateLinkedDetailsElements("", `${locale.LocaleTable["Route Departures"]}:`);
                const DataCE_Route_Departures_Content = HTMLDoubleElements.CreateDoubleDivElements();
                const DataCE_Route_Weekdays = HTMLDoubleElements.CreateLinkedDetailsElements("", `${locale.LocaleTable["Weekdays"]}:`);
                const DataCE_Route_Weekdays_Content = HTMLDoubleElements.CreateDoubleDivElements();
                const DataCE_Route_Saturday = HTMLDoubleElements.CreateLinkedDetailsElements("", `${locale.LocaleTable["Saturday"]}:`);
                const DataCE_Route_Saturday_Content = HTMLDoubleElements.CreateDoubleDivElements();
                const DataCE_Route_Sunday = HTMLDoubleElements.CreateLinkedDetailsElements("", `${locale.LocaleTable["Sunday"]}:`);
                const DataCE_Route_Sunday_Content = HTMLDoubleElements.CreateDoubleDivElements();
                DataCE_Route_Details[0].className = "Empty";
                DataCE_Route_Details[1].className = "Added";
                DataCE_Route_Details[0].appendChild(DataCE_Route_Details_Content[0]);
                DataCE_Route_Details_Content[0].appendChild(DataCE_Route_Number[0]);
                DataCE_Route_Details_Content[0].appendChild(DataCE_Route_Name[0]);
                DataCE_Route_Details_Content[0].appendChild(DataCE_Route_Type[0]);
                DataCE_Route_Details_Content[0].appendChild(DataCE_Route_Departures[0]);
                DataCE_Route_Departures[0].appendChild(DataCE_Route_Departures_Content[0]);
                DataCE_Route_Departures_Content[0].appendChild(DataCE_Route_Weekdays[0]);
                DataCE_Route_Weekdays[0].appendChild(DataCE_Route_Weekdays_Content[0]);
                DataCE_Route_Departures_Content[0].appendChild(DataCE_Route_Saturday[0]);
                DataCE_Route_Saturday[0].appendChild(DataCE_Route_Saturday_Content[0]);
                DataCE_Route_Departures_Content[0].appendChild(DataCE_Route_Sunday[0]);
                DataCE_Route_Sunday[0].appendChild(DataCE_Route_Sunday_Content[0]);
                DataCE_Route_Details[1].appendChild(DataCE_Route_Details_Content[1]);
                DataCE_Route_Details_Content[1].appendChild(DataCE_Route_Number[1]);
                DataCE_Route_Details_Content[1].appendChild(DataCE_Route_Name[1]);
                DataCE_Route_Details_Content[1].appendChild(DataCE_Route_Type[1]);
                DataCE_Route_Details_Content[1].appendChild(DataCE_Route_Departures[1]);
                DataCE_Route_Departures[1].appendChild(DataCE_Route_Departures_Content[1]);
                DataCE_Route_Departures_Content[1].appendChild(DataCE_Route_Weekdays[1]);
                DataCE_Route_Departures_Content[1].appendChild(DataCE_Route_Saturday[1]);
                DataCE_Route_Departures_Content[1].appendChild(DataCE_Route_Sunday[1]);
                DataCE_Route_Weekdays[1].appendChild(DataCE_Route_Weekdays_Content[1]);
                DataCE_Route_Saturday[1].appendChild(DataCE_Route_Saturday_Content[1]);
                DataCE_Route_Sunday[1].appendChild(DataCE_Route_Sunday_Content[1]);
                for (let routeDeparture of DataC[1].RouteDepartures.Weekdays) {
                    const DataCE_Departure = HTMLDoubleElements.CreateDoubleSpanElements("", routeDeparture);
                    DataCE_Route_Weekdays_Content[0].appendChild(DataCE_Departure[0]);
                    DataCE_Route_Weekdays_Content[1].appendChild(DataCE_Departure[1]);
                }
                for (let routeDeparture of DataC[1].RouteDepartures.Saturday) {
                    const DataCE_Departure = HTMLDoubleElements.CreateDoubleSpanElements("", routeDeparture);
                    DataCE_Route_Saturday_Content[0].appendChild(DataCE_Departure[0]);
                    DataCE_Route_Saturday_Content[1].appendChild(DataCE_Departure[1]);
                }
                for (let routeDeparture of DataC[1].RouteDepartures.Sunday) {
                    const DataCE_Departure = HTMLDoubleElements.CreateDoubleSpanElements("", routeDeparture);
                    DataCE_Route_Sunday_Content[0].appendChild(DataCE_Departure[0]);
                    DataCE_Route_Sunday_Content[1].appendChild(DataCE_Departure[1]);
                }
                DataCE_List[0].push(DataCE_Route_Details[0]);
                DataCE_List[1].push(DataCE_Route_Details[1]);
                continue;
            }
            if (DataC[1] === undefined) {
                const DataCE_Route_Details = HTMLDoubleElements.CreateLinkedDetailsElements(`${DataC[0].RouteNumber} (${DataC[0].RouteName})`, "");
                const DataCE_Route_Details_Content = HTMLDoubleElements.CreateDoubleDivElements();
                const DataCE_Route_Number = HTMLDoubleElements.CreateDoubleSpanElements(`${locale.LocaleTable["Route Number"]}: ${DataC[0].RouteNumber}`, "");
                const DataCE_Route_Name = HTMLDoubleElements.CreateDoubleSpanElements(`${locale.LocaleTable["Route Name"]}: ${DataC[0].RouteName}`, "");
                const DataCE_Route_Type = HTMLDoubleElements.CreateDoubleSpanElements(`${locale.LocaleTable["Route Type"]}: ${DataC[0].RouteType}`, "");
                const DataCE_Route_Departures = HTMLDoubleElements.CreateLinkedDetailsElements(`${locale.LocaleTable["Route Departures"]}:`, "");
                const DataCE_Route_Departures_Content = HTMLDoubleElements.CreateDoubleDivElements();
                const DataCE_Route_Weekdays = HTMLDoubleElements.CreateLinkedDetailsElements(`${locale.LocaleTable["Weekdays"]}:`, "");
                const DataCE_Route_Weekdays_Content = HTMLDoubleElements.CreateDoubleDivElements();
                const DataCE_Route_Saturday = HTMLDoubleElements.CreateLinkedDetailsElements(`${locale.LocaleTable["Saturday"]}:`, "");
                const DataCE_Route_Saturday_Content = HTMLDoubleElements.CreateDoubleDivElements();
                const DataCE_Route_Sunday = HTMLDoubleElements.CreateLinkedDetailsElements(`${locale.LocaleTable["Sunday"]}:`, "");
                const DataCE_Route_Sunday_Content = HTMLDoubleElements.CreateDoubleDivElements();
                DataCE_Route_Details[0].className = "Removed";
                DataCE_Route_Details[1].className = "Empty";
                DataCE_Route_Details[0].appendChild(DataCE_Route_Details_Content[0]);
                DataCE_Route_Details_Content[0].appendChild(DataCE_Route_Number[0]);
                DataCE_Route_Details_Content[0].appendChild(DataCE_Route_Name[0]);
                DataCE_Route_Details_Content[0].appendChild(DataCE_Route_Type[0]);
                DataCE_Route_Details_Content[0].appendChild(DataCE_Route_Departures[0]);
                DataCE_Route_Departures[0].appendChild(DataCE_Route_Departures_Content[0]);
                DataCE_Route_Departures_Content[0].appendChild(DataCE_Route_Weekdays[0]);
                DataCE_Route_Weekdays[0].appendChild(DataCE_Route_Weekdays_Content[0]);
                DataCE_Route_Departures_Content[0].appendChild(DataCE_Route_Saturday[0]);
                DataCE_Route_Saturday[0].appendChild(DataCE_Route_Saturday_Content[0]);
                DataCE_Route_Departures_Content[0].appendChild(DataCE_Route_Sunday[0]);
                DataCE_Route_Sunday[0].appendChild(DataCE_Route_Sunday_Content[0]);
                DataCE_Route_Details[1].appendChild(DataCE_Route_Details_Content[1]);
                DataCE_Route_Details_Content[1].appendChild(DataCE_Route_Number[1]);
                DataCE_Route_Details_Content[1].appendChild(DataCE_Route_Name[1]);
                DataCE_Route_Details_Content[1].appendChild(DataCE_Route_Type[1]);
                DataCE_Route_Details_Content[1].appendChild(DataCE_Route_Departures[1]);
                DataCE_Route_Departures[1].appendChild(DataCE_Route_Departures_Content[1]);
                DataCE_Route_Departures_Content[1].appendChild(DataCE_Route_Weekdays[1]);
                DataCE_Route_Departures_Content[1].appendChild(DataCE_Route_Saturday[1]);
                DataCE_Route_Departures_Content[1].appendChild(DataCE_Route_Sunday[1]);
                DataCE_Route_Weekdays[1].appendChild(DataCE_Route_Weekdays_Content[1]);
                DataCE_Route_Saturday[1].appendChild(DataCE_Route_Saturday_Content[1]);
                DataCE_Route_Sunday[1].appendChild(DataCE_Route_Sunday_Content[1]);
                for (let routeDeparture of DataC[0].RouteDepartures.Weekdays) {
                    const DataCE_Departure = HTMLDoubleElements.CreateDoubleSpanElements(routeDeparture, "");
                    DataCE_Route_Weekdays_Content[0].appendChild(DataCE_Departure[0]);
                    DataCE_Route_Weekdays_Content[1].appendChild(DataCE_Departure[1]);
                }
                for (let routeDeparture of DataC[0].RouteDepartures.Saturday) {
                    const DataCE_Departure = HTMLDoubleElements.CreateDoubleSpanElements(routeDeparture, "");
                    DataCE_Route_Saturday_Content[0].appendChild(DataCE_Departure[0]);
                    DataCE_Route_Saturday_Content[1].appendChild(DataCE_Departure[1]);
                }
                for (let routeDeparture of DataC[0].RouteDepartures.Sunday) {
                    const DataCE_Departure = HTMLDoubleElements.CreateDoubleSpanElements(routeDeparture, "");
                    DataCE_Route_Sunday_Content[0].appendChild(DataCE_Departure[0]);
                    DataCE_Route_Sunday_Content[1].appendChild(DataCE_Departure[1]);
                }
                DataCE_List[0].push(DataCE_Route_Details[0]);
                DataCE_List[1].push(DataCE_Route_Details[1]);
                continue;
            }
            //If both routes exist, this code will run.
            {
                const DataC_Departures = {
                    Weekdays: Array.SortWithAlphanumericCollator(Array.JoinWithoutDuplicates(DataC[0].RouteDepartures.Weekdays, DataC[1].RouteDepartures.Weekdays), (value) => (value)),
                    Saturday: Array.SortWithAlphanumericCollator(Array.JoinWithoutDuplicates(DataC[0].RouteDepartures.Saturday, DataC[1].RouteDepartures.Saturday), (value) => (value)),
                    Sunday: Array.SortWithAlphanumericCollator(Array.JoinWithoutDuplicates(DataC[0].RouteDepartures.Sunday, DataC[1].RouteDepartures.Sunday), (value) => (value))
                };
                const Is_RouteName_Same = DataC[0].RouteName === DataC[1].RouteName;
                const Is_RouteType_Same = DataC[0].RouteType === DataC[1].RouteType;
                const Is_RouteWeekdays_Same = (DataC[0].RouteDepartures.Weekdays.length === DataC_Departures.Weekdays.length) && (DataC[1].RouteDepartures.Weekdays.length === DataC_Departures.Weekdays.length);
                const Is_RouteSaturday_Same = (DataC[0].RouteDepartures.Saturday.length === DataC_Departures.Saturday.length) && (DataC[1].RouteDepartures.Saturday.length === DataC_Departures.Saturday.length);
                const Is_RouteSunday_Same = (DataC[0].RouteDepartures.Sunday.length === DataC_Departures.Sunday.length) && (DataC[1].RouteDepartures.Sunday.length === DataC_Departures.Sunday.length);
                const Is_Route_Same = (Is_RouteName_Same && Is_RouteType_Same && (Is_RouteWeekdays_Same && Is_RouteSaturday_Same && Is_RouteSunday_Same)) === true;
                if ((Is_Route_Same === true) && (includeUnchangedData === false)) {
                    continue;
                }
                const DataCE_Route_Details = HTMLDoubleElements.CreateLinkedDetailsElements(`${DataC[0].RouteNumber} (${DataC[0].RouteName})`, `${DataC[1].RouteNumber} (${DataC[1].RouteName})`);
                const DataCE_Route_Details_Content = HTMLDoubleElements.CreateDoubleDivElements();
                const DataCE_Route_Number = HTMLDoubleElements.CreateDoubleSpanElements(`${locale.LocaleTable["Route Number"]}: ${DataC[0].RouteNumber}`);
                const DataCE_Route_Name = HTMLDoubleElements.CreateDoubleSpanElements(`${locale.LocaleTable["Route Name"]}: ${DataC[0].RouteName}`, `${locale.LocaleTable["Route Name"]}: ${DataC[1].RouteName}`);
                const DataCE_Route_Type = HTMLDoubleElements.CreateDoubleSpanElements(`${locale.LocaleTable["Route Type"]}: ${DataC[0].RouteType}`, `${locale.LocaleTable["Route Type"]}: ${DataC[1].RouteType}`);
                const DataCE_Route_Departures = HTMLDoubleElements.CreateLinkedDetailsElements(`${locale.LocaleTable["Route Departures"]}:`);
                const DataCE_Route_Departures_Content = HTMLDoubleElements.CreateDoubleDivElements();
                const DataCE_Route_Weekdays = HTMLDoubleElements.CreateLinkedDetailsElements(`${locale.LocaleTable["Weekdays"]}:`);
                const DataCE_Route_Weekdays_Content = HTMLDoubleElements.CreateDoubleDivElements();
                const DataCE_Route_Saturday = HTMLDoubleElements.CreateLinkedDetailsElements(`${locale.LocaleTable["Saturday"]}:`);
                const DataCE_Route_Saturday_Content = HTMLDoubleElements.CreateDoubleDivElements();
                const DataCE_Route_Sunday = HTMLDoubleElements.CreateLinkedDetailsElements(`${locale.LocaleTable["Sunday"]}:`);
                const DataCE_Route_Sunday_Content = HTMLDoubleElements.CreateDoubleDivElements();
                DataCE_Route_Details[0].appendChild(DataCE_Route_Details_Content[0]);
                DataCE_Route_Details_Content[0].appendChild(DataCE_Route_Number[0]);
                DataCE_Route_Details_Content[0].appendChild(DataCE_Route_Name[0]);
                DataCE_Route_Details_Content[0].appendChild(DataCE_Route_Type[0]);
                DataCE_Route_Details_Content[0].appendChild(DataCE_Route_Departures[0]);
                DataCE_Route_Departures[0].appendChild(DataCE_Route_Departures_Content[0]);
                DataCE_Route_Departures_Content[0].appendChild(DataCE_Route_Weekdays[0]);
                DataCE_Route_Weekdays[0].appendChild(DataCE_Route_Weekdays_Content[0]);
                DataCE_Route_Departures_Content[0].appendChild(DataCE_Route_Saturday[0]);
                DataCE_Route_Saturday[0].appendChild(DataCE_Route_Saturday_Content[0]);
                DataCE_Route_Departures_Content[0].appendChild(DataCE_Route_Sunday[0]);
                DataCE_Route_Sunday[0].appendChild(DataCE_Route_Sunday_Content[0]);
                DataCE_Route_Details[1].appendChild(DataCE_Route_Details_Content[1]);
                DataCE_Route_Details_Content[1].appendChild(DataCE_Route_Number[1]);
                DataCE_Route_Details_Content[1].appendChild(DataCE_Route_Name[1]);
                DataCE_Route_Details_Content[1].appendChild(DataCE_Route_Type[1]);
                DataCE_Route_Details_Content[1].appendChild(DataCE_Route_Departures[1]);
                DataCE_Route_Departures[1].appendChild(DataCE_Route_Departures_Content[1]);
                DataCE_Route_Departures_Content[1].appendChild(DataCE_Route_Weekdays[1]);
                DataCE_Route_Departures_Content[1].appendChild(DataCE_Route_Saturday[1]);
                DataCE_Route_Departures_Content[1].appendChild(DataCE_Route_Sunday[1]);
                DataCE_Route_Weekdays[1].appendChild(DataCE_Route_Weekdays_Content[1]);
                DataCE_Route_Saturday[1].appendChild(DataCE_Route_Saturday_Content[1]);
                DataCE_Route_Sunday[1].appendChild(DataCE_Route_Sunday_Content[1]);
                if (Is_Route_Same) {
                    DataCE_Route_Details[0].className = DataCE_Route_Details[1].className = "None";
                    for (let routeDeparture of DataC_Departures.Weekdays) {
                        const DataCE_Departure = HTMLDoubleElements.CreateDoubleSpanElements(routeDeparture);
                        DataCE_Route_Weekdays_Content[0].appendChild(DataCE_Departure[0]);
                        DataCE_Route_Weekdays_Content[1].appendChild(DataCE_Departure[1]);
                    }
                    for (let routeDeparture of DataC_Departures.Saturday) {
                        const DataCE_Departure = HTMLDoubleElements.CreateDoubleSpanElements(routeDeparture);
                        DataCE_Route_Saturday_Content[0].appendChild(DataCE_Departure[0]);
                        DataCE_Route_Saturday_Content[1].appendChild(DataCE_Departure[1]);
                    }
                    for (let routeDeparture of DataC_Departures.Sunday) {
                        const DataCE_Departure = HTMLDoubleElements.CreateDoubleSpanElements(routeDeparture);
                        DataCE_Route_Sunday_Content[0].appendChild(DataCE_Departure[0]);
                        DataCE_Route_Sunday_Content[1].appendChild(DataCE_Departure[1]);
                    }
                }
                else {
                    DataCE_Route_Details[0].className = DataCE_Route_Details[1].className = "Changed";
                    DataCE_Route_Number[0].className = DataCE_Route_Number[1].className = "None";
                    DataCE_Route_Name[0].className = DataCE_Route_Name[1].className = (Is_RouteName_Same ? "None" : "");
                    DataCE_Route_Type[0].className = DataCE_Route_Type[1].className = (Is_RouteType_Same ? "None" : "");
                    DataCE_Route_Departures[0].className = DataCE_Route_Departures[1].className = ((Is_RouteWeekdays_Same && Is_RouteSaturday_Same && Is_RouteSunday_Same) ? "None" : "");
                    DataCE_Route_Weekdays[0].className = DataCE_Route_Weekdays[1].className = (Is_RouteWeekdays_Same ? "None" : "");
                    DataCE_Route_Saturday[0].className = DataCE_Route_Saturday[1].className = (Is_RouteSaturday_Same ? "None" : "");
                    DataCE_Route_Sunday[0].className = DataCE_Route_Sunday[1].className = (Is_RouteSunday_Same ? "None" : "");
                    if (Is_RouteWeekdays_Same === true) {
                        for (let routeDeparture of DataC_Departures.Weekdays) {
                            const DataCE_Departure = HTMLDoubleElements.CreateDoubleSpanElements(routeDeparture);
                            DataCE_Route_Weekdays_Content[0].appendChild(DataCE_Departure[0]);
                            DataCE_Route_Weekdays_Content[1].appendChild(DataCE_Departure[1]);
                        }
                    }
                    else {
                        for (let routeDeparture of DataC_Departures.Weekdays) {
                            if (DataC[0].RouteDepartures.Weekdays.find((value) => (value === routeDeparture)) !== undefined) {
                                if (DataC[1].RouteDepartures.Weekdays.find((value) => (value === routeDeparture)) !== undefined) {
                                    const DataCE_Departure = HTMLDoubleElements.CreateDoubleSpanElements(routeDeparture);
                                    DataCE_Departure[0].className = DataCE_Departure[1].className = "None";
                                    DataCE_Route_Weekdays_Content[0].appendChild(DataCE_Departure[0]);
                                    DataCE_Route_Weekdays_Content[1].appendChild(DataCE_Departure[1]);
                                }
                                else {
                                    const DataCE_Departure = HTMLDoubleElements.CreateDoubleSpanElements(routeDeparture, "");
                                    DataCE_Departure[0].className = "Removed";
                                    DataCE_Departure[1].className = "Empty";
                                    DataCE_Route_Weekdays_Content[0].appendChild(DataCE_Departure[0]);
                                    DataCE_Route_Weekdays_Content[1].appendChild(DataCE_Departure[1]);
                                }
                            }
                            else {
                                const DataCE_Departure = HTMLDoubleElements.CreateDoubleSpanElements("", routeDeparture);
                                DataCE_Departure[0].className = "Empty";
                                DataCE_Departure[1].className = "Added";
                                DataCE_Route_Weekdays_Content[0].appendChild(DataCE_Departure[0]);
                                DataCE_Route_Weekdays_Content[1].appendChild(DataCE_Departure[1]);
                            }
                        }
                    }
                    if (Is_RouteSaturday_Same === true) {
                        for (let routeDeparture of DataC_Departures.Saturday) {
                            const DataCE_Departure = HTMLDoubleElements.CreateDoubleSpanElements(routeDeparture);
                            DataCE_Route_Saturday_Content[0].appendChild(DataCE_Departure[0]);
                            DataCE_Route_Saturday_Content[1].appendChild(DataCE_Departure[1]);
                        }
                    }
                    else {
                        for (let routeDeparture of DataC_Departures.Saturday) {
                            if (DataC[0].RouteDepartures.Saturday.find((value) => (value === routeDeparture)) !== undefined) {
                                if (DataC[1].RouteDepartures.Saturday.find((value) => (value === routeDeparture)) !== undefined) {
                                    const DataCE_Departure = HTMLDoubleElements.CreateDoubleSpanElements(routeDeparture);
                                    DataCE_Departure[0].className = DataCE_Departure[1].className = "None";
                                    DataCE_Route_Saturday_Content[0].appendChild(DataCE_Departure[0]);
                                    DataCE_Route_Saturday_Content[1].appendChild(DataCE_Departure[1]);
                                }
                                else {
                                    const DataCE_Departure = HTMLDoubleElements.CreateDoubleSpanElements(routeDeparture, "");
                                    DataCE_Departure[0].className = "Removed";
                                    DataCE_Departure[1].className = "Empty";
                                    DataCE_Route_Saturday_Content[0].appendChild(DataCE_Departure[0]);
                                    DataCE_Route_Saturday_Content[1].appendChild(DataCE_Departure[1]);
                                }
                            }
                            else {
                                const DataCE_Departure = HTMLDoubleElements.CreateDoubleSpanElements("", routeDeparture);
                                DataCE_Departure[0].className = "Empty";
                                DataCE_Departure[1].className = "Added";
                                DataCE_Route_Saturday_Content[0].appendChild(DataCE_Departure[0]);
                                DataCE_Route_Saturday_Content[1].appendChild(DataCE_Departure[1]);
                            }
                        }
                    }
                    if (Is_RouteSunday_Same === true) {
                        for (let routeDeparture of DataC_Departures.Sunday) {
                            const DataCE_Departure = HTMLDoubleElements.CreateDoubleSpanElements(routeDeparture);
                            DataCE_Route_Sunday_Content[0].appendChild(DataCE_Departure[0]);
                            DataCE_Route_Sunday_Content[1].appendChild(DataCE_Departure[1]);
                        }
                    }
                    else {
                        for (let routeDeparture of DataC_Departures.Sunday) {
                            if (DataC[0].RouteDepartures.Sunday.find((value) => (value === routeDeparture)) !== undefined) {
                                if (DataC[1].RouteDepartures.Sunday.find((value) => (value === routeDeparture)) !== undefined) {
                                    const DataCE_Departure = HTMLDoubleElements.CreateDoubleSpanElements(routeDeparture);
                                    DataCE_Departure[0].className = DataCE_Departure[1].className = "None";
                                    DataCE_Route_Sunday_Content[0].appendChild(DataCE_Departure[0]);
                                    DataCE_Route_Sunday_Content[1].appendChild(DataCE_Departure[1]);
                                }
                                else {
                                    const DataCE_Departure = HTMLDoubleElements.CreateDoubleSpanElements(routeDeparture, "");
                                    DataCE_Departure[0].className = "Removed";
                                    DataCE_Departure[1].className = "Empty";
                                    DataCE_Route_Sunday_Content[0].appendChild(DataCE_Departure[0]);
                                    DataCE_Route_Sunday_Content[1].appendChild(DataCE_Departure[1]);
                                }
                            }
                            else {
                                const DataCE_Departure = HTMLDoubleElements.CreateDoubleSpanElements("", routeDeparture);
                                DataCE_Departure[0].className = "Empty";
                                DataCE_Departure[1].className = "Added";
                                DataCE_Route_Sunday_Content[0].appendChild(DataCE_Departure[0]);
                                DataCE_Route_Sunday_Content[1].appendChild(DataCE_Departure[1]);
                            }
                        }
                    }
                }
                DataCE_List[0].push(DataCE_Route_Details[0]);
                DataCE_List[1].push(DataCE_Route_Details[1]);
                continue;
            }
        }
        return DataCE_List;
    }
};
