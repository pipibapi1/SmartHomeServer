const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let GasLog = new Schema({
  userId : String,
  createAt : { type: Date},
  data : [
      {
          value: Number,
          time: Date
      }
  ]
});

gasLogModel = mongoose.model("GasLog", GasLog, "GasLog");

module.exports = {
    create : function(uid, time){
        let month = new Date(time.getFullYear(), time.getMonth());
        gasLogModel.create({
            userId : uid,
            createAt : month,
            data : [
                {
                    value: value,
                    time: time
                }
            ]
        }, function (err, docs) {
            if (err){
                console.log(handleError(err))
            } 
            else {
            }
          });
    },

    addOne: function(uid, time, value){
        let month = new Date(time.getFullYear(), time.getMonth());
        let myQuery = { userId : uid, createAt : month }
        let newUpdate = {
            $push: {data : {
                            value: value,
                            time: time
                        }}
        }
        gasLogModel.updateOne(myQuery, newUpdate, function (err, docs){
            if (err) {
                console.log(err);
            }
            else {
                if (docs.matchedCount == 0) {
                    gasLogModel.create({
                        userId : uid,
                        createAt : month,
                        data : [
                            {
                                value: value,
                                time: time
                            }
                        ]
                    }, function (err, docs) {
                        if (err){
                            console.log(handleError(err))
                        } 
                        else {
                        }
                      });
                }
            }
        })
    }
}

