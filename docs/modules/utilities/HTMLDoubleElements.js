export function CreateLinkedDetailsElements(summaryTextContent0, summaryTextContent1 = summaryTextContent0) {
    let details0 = document.createElement("details");
    let details1 = document.createElement("details");
    let summary0 = document.createElement("summary");
    let summary1 = document.createElement("summary");
    summary0.textContent = summaryTextContent0;
    summary1.textContent = summaryTextContent1;
    details0.appendChild(summary0);
    details1.appendChild(summary1);
    details0.addEventListener("toggle", () => {
        details1.open = details0.open;
    });
    details1.addEventListener("toggle", () => {
        details0.open = details1.open;
    });
    return [details0, details1];
}
export function CreateLinkedDivElements() {
    let element0 = document.createElement("div");
    let element1 = document.createElement("div");
    element0.addEventListener("scroll", () => {
        element1.scrollTop = element0.scrollTop;
        element1.scrollLeft = element0.scrollLeft;
    });
    element1.addEventListener("scroll", () => {
        element0.scrollTop = element1.scrollTop;
        element0.scrollLeft = element1.scrollLeft;
    });
    return [element0, element1];
}
export function CreateDoubleDivElements() {
    return [document.createElement("div"), document.createElement("div")];
}
export function CreateDoubleSpanElements(textContent0, textContent1 = textContent0) {
    let element0 = document.createElement("span");
    let element1 = document.createElement("span");
    element0.textContent = textContent0;
    element1.textContent = textContent1;
    return [element0, element1];
}
