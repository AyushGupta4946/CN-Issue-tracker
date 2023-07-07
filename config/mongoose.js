//require the library
const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://aagm0404:Simraj0404@cluster0.ihza8od.mongodb.net/?retryWrites=true&w=majority")
// mongoose.connect("mongodb://127.0.0.1:27017/demo",{
//     useUnifiedTopology:true,
//     useNewUrlParser : true
// });
const db=mongoose.connection;

//error
db.on("error", function (err) {
  console.log(err.message);
});

//up and running then print the message
db.once("open", function () {
  console.log("Successfully connected to the database");
});

module.exports = db;
