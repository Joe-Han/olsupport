import qs from "querystring"

let headers = {
    "Accept":"application/vnd.github.v3+json",
    "Authorization":`Bearer a62a218f6e8f9c571a0a1ccd39649b792630ee25` //
}

export function httpGet(url: string){
    //console.log(cookie.load("token"));
    console.log(headers.Authorization);
    const result = fetch(url,{
        headers:headers
    });
    return result;
}

export function httpPost(url: string, params:any){
    const result = fetch(url,{
        method:"POST",
        headers:headers,
        body:qs.stringify(params)
    });
    return result;
}