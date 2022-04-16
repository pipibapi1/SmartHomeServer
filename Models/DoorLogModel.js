const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let DoorLog = new Schema({
  userId : String,
  doorId : String,
  createAt : { type: Date},
  data : [
      {
          value: Number,
          time: Date
      }
  ]
});

DoorLogModel = mongoose.model("DoorLog", DoorLog, "DoorLog");

module.exports = {
    DoorLogModel,
    // create : function(uid, time){
    //     let month = new Date(time.getFullYear(), time.getMonth());
    //     DoorLogModel.create({
    //         userId : uid,
    //         createAt : month,
    //         data : [
    //             {
    //                 value: value,
    //                 time: time
    //             }
    //         ]
    //     }, function (err, docs) {
    //         if (err){
    //             console.log(handleError(err))
    //         } 
    //         else {
    //         }
    //       });
    // },

    // addOne: function(uid, time, value){
    //     let month = new Date(time.getFullYear(), time.getMonth());
    //     let myQuery = { userId : uid, createAt : month }
    //     let newUpdate = {
    //         $push: {data : {
    //                         value: value,
    //                         time: time
    //                     }}
    //     }
    //     DoorLogModel.updateOne(myQuery, newUpdate, function (err, docs){
    //         if (err) {
    //             console.log(err);
    //         }
    //         else {
    //             if (docs.matchedCount == 0) {
    //                 DoorLogModel.create({
    //                     userId : uid,
    //                     createAt : month,
    //                     data : [
    //                         {
    //                             value: value,
    //                             time: time
    //                         }
    //                     ]
    //                 }, function (err, docs) {
    //                     if (err){
    //                         console.log(handleError(err))
    //                     } 
    //                     else {
    //                     }
    //                   });
    //             }
    //         }
    //     })
    // }
}

