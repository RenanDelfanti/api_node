"use strict";
import * as blurhash from 'blurhash'
import { createCanvas, loadImage, Image } from 'canvas';

const getImageData = (image: Image) => {
  const canvas = createCanvas(image.width, image.height)
  const context = canvas.getContext('2d')
  context.drawImage(image, 0, 0)
  return context.getImageData(0, 0, image.width, image.height)
}

exports.handler = (event: any, callback: any) => {
    console.log(event);
    return callback(null, retOk({message: 'teste'}, 200));
}

exports.blurImage = async (event: any, callback: any) => {
    let result;
    
    if (event.url === undefined || event.componentY === undefined || event.componentY === undefined) {
        return callback(true, retOk('Payload inválido', 500));
    }

    try {
        const image = await loadImage(event.url);
        const imageData = getImageData(image);
        result = blurhash.encode(
          imageData.data,
          imageData.width,
          imageData.height,
          event.componentX,
          event.componentY
        );
        const isValid = blurhash.isBlurhashValid(result);
        if(!isValid.result)
            throw new Error("Erro na conversão");
    }catch (err) {
        return callback(true, retOk(err.message, 500));
    }
    return callback(null, retOk({imageBlur: result}, 200));
}

function retOk(body: any, statuscode: number) {
    return {
        "statusCode": statuscode,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        "body": statuscode === 500 ? JSON.stringify({ "message": body }): body
    }
};