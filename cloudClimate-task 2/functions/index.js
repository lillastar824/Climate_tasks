const functions = require("firebase-functions");
const data = require("./dummy.json");
const percentile = require("percentile");

exports.findPercentile = functions.https.onRequest((req, res) => {
  const scoreArr = data.documents.map((elem, index) => {
    return elem.score;
  });

  const result = percentile([10, 50, 90], scoreArr);
  const newResult = {
    "10th Percentile": result[0],
    "50th Percentile": result[1],
    "90th Percentile": result[2],
  };

  res.status(200).send(newResult);
});

// exports.addUser = functions.auth.user().onCreate((user) => {
//   console.log(`${user.email} is created now ... `);
//   return Promise.resolve();
// });

// exports.deleteUser = functions.auth.user().onDelete((user) => {
//   console.log(`${user.email} is deleted now ... `);
//   return Promise.resolve();
// });

// exports.addDoc = functions.firestore
//   .document("/scoreData/{documentId}")
//   .onCreate((snapshot, context) => {
//     return Promise.resolve();
//   });
