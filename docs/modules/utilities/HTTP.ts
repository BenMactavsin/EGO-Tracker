export async function GetAsyncRaw(url: string): Promise<string> {
    return await (await fetch(url)).text()
}

export async function GetAsyncJSON(url: string): Promise<any> {
    return await (await fetch(url)).json()
}