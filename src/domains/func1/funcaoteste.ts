"use strict";

exports.handler = (event: any, callback: any) => {
    console.log(event);
    return callback(true, retOk('teste', 200));
    //return callback(null, retOk('teste', 200));
}

exports.teste = (event: any, callback: any) => {
    console.log(event);
    return callback(true, retOk('teste', 500));
    //return callback(null, retOk('teste', 200));
}

function retOk(body: any, statuscode: number) {
    return {
        "statusCode": statuscode,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        "body": JSON.stringify({ "message": body })
    }
};