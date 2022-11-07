import * as dotenv from 'dotenv' 
dotenv.config()

const { 
    FIREBASE_APIKEY: apiKey,
    FIREBASE_PROJECTID: projectId,
    FIREBASE_APPID: appId,

    FIREBASE_AUTHDOMAIN: authDomain,
    FIREBASE_STORAGE_BUCKET: storageBucket,
    FIREBASE_MESSAGINGSENDERID: messagingSenderId,
    FIREBASE_MEASUREMENTID: measurementId,
} = process.env

const config = { options: { apiKey, appId, projectId } }



export {
    config
}