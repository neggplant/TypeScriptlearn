import { deflate } from "zlib"


let anExampleVariable: string = '12'
let anExampleNumber: number = 12.5
let anExampleBoolean: boolean = true
let answer: 'yes'|'no'|'maybe'|undefined = undefined
let httpStatus: 200|404|'500' = 200


function processHttp(s:
    200 | 404 | 500 | "200" | "404" | "500"){
    let statusStr = 0
    if (typeof(s) === "string") {
        statusStr = parseInt(s)
    } else {
        statusStr = s
    }
    if (s === 200){
        console.log('ok')
    } else if (s === 404){
        console.log("not found")
    } else if (s === 500){
        console.log("internal server error")
    } else {
        console.log("unknown error")
    }
}

function processHttpStr(s:
    200 | 404 | 500 | "200" | "404" | "500"){
    // 转成str
    // let statusStr = ""
    // if (typeof s === "number") {
    //     statusStr = s.toString()
    // } else {
    //     statusStr = s
    // }
    const statusStr = typeof s === "number" ? s.toString() : s
    switch (statusStr) {
        case "200":
            console.log('ok')
            break
        case "404":
            console.log('not found')
            break
        case "500":
            console.log("internal server error")
            break
        default:
            console.log("unknow error")
    }
    // if (statusStr === '200'){
    //     console.log('ok')
    // } else if (statusStr === '404'){
    //     console.log("not found")
    // } else if (statusStr === '500'){
    //     console.log("internal server error")
    // } else {
    //     console.log("unknown error")
    // }
}


processHttpStr(200)
