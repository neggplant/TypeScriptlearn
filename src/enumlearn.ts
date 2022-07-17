// 可以直接写名字
enum HTTPStatus1 {
    OK,
    NOT_FOUND,
    INTERNAL_SERVER_ERROR,
}
// 可以指定值
enum HTTPStatus {
    OK = 200,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}

function processHttpStr(s: HTTPStatus) {
    // print value
    console.log(s)
    // print name
    console.log(HTTPStatus[s])
}

processHttpStr(HTTPStatus.OK)