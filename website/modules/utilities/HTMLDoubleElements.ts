export function CreateLinkedDetailsElements(summaryTextContent0: string, summaryTextContent1: string = summaryTextContent0): ([HTMLDetailsElement, HTMLDetailsElement]) {
    let details0: HTMLDetailsElement = document.createElement("details")
    let details1: HTMLDetailsElement = document.createElement("details")

    let summary0: HTMLElement = document.createElement("summary")
    let summary1: HTMLElement = document.createElement("summary")

    summary0.textContent = summaryTextContent0
    summary1.textContent = summaryTextContent1

    details0.appendChild(summary0)
    details1.appendChild(summary1)

    details0.addEventListener("toggle", () => {
        details1.open = details0.open
    })

    details1.addEventListener("toggle", () => {
        details0.open = details1.open
    })

    return [details0, details1]
}

export function CreateLinkedDivElements(): ([HTMLDivElement, HTMLDivElement]) {
    let element0: HTMLDivElement = document.createElement("div")
    let element1: HTMLDivElement = document.createElement("div")

    element0.addEventListener("scroll", () => {
        element1.scrollTop = element0.scrollTop
        element1.scrollLeft = element0.scrollLeft
    })

    element1.addEventListener("scroll", () => {
        element0.scrollTop = element1.scrollTop
        element0.scrollLeft = element1.scrollLeft
    })

    return [element0, element1]
}

export function CreateDoubleDivElements(): ([HTMLDivElement, HTMLDivElement]) {
    return [document.createElement("div"), document.createElement("div")]
}

export function CreateDoubleSpanElements(textContent0: string, textContent1: string = textContent0): ([HTMLSpanElement, HTMLSpanElement]) {
    let element0: HTMLSpanElement = document.createElement("span")
    let element1: HTMLSpanElement = document.createElement("span")

    element0.textContent = textContent0
    element1.textContent = textContent1

    return [element0, element1]
}