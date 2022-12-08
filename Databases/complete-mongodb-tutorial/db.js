const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/bookstore";
const uriAtlas =
  "mongodb+srv://kprogramista89:kp89@cluster0.kwbu26w.mongodb.net/?retryWrites=true&w=majority";

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(uriAtlas)
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};

// 2nd option fron comment using async -> await:
// // Connect to the database
// exports.connectToDb = async (cb) => {
//   // a callback function is passed, and it will be executed when the following task is completed.
//   try {
//     const client = await MongoClient.connect(uri);
//     dbConnection = client.db();
//     return cb();
//   } catch (error) {
//     console.log(error);
//     return cb(error);
//   }
// };

// // Return the database connection so we can play with it (make queries)
// exports.getDb = () => dbConnection;
