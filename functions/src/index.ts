import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const helloWorld = functions.https.onRequest((req, res) => {
  res.status(200).send({message: "Hello from Firebase Functions!"});
});
