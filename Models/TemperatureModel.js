const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Temperature = new Schema({
  userId : String,
  createAt : { type: Date, default: Date.now },
  data : [
      {
          val: Number,
          time: Date
      }
  ]
});

model = mongoose.model("Temperature", Temperature, "Temperature");

module.exports = {
    create : function(uid, time, value){
        let day = new Date(time.getFullYear(), time.getMonth(), time.getDate());
        model.create({
            userId : uid,
            createAt : day,
            data : [
                {
                    val: value,
                    time: time
                }
            ]
        }, function (err, docs) {
            if (err){
                console.log(handleError(err))
            } 
            else {
                console.log(docs);
            }
          });
    },

    update: function(uid, time, value){
        let day = new Date(time.getFullYear(), time.getMonth(), time.getDate());
        let myQuery = { userId : uid, createAt : day }
        let newUpdate = {
            $push: {data : {
                            val: value,
                            time: time
                        }}
        }
        model.updateOne(myQuery, newUpdate, function (err, docs){
            if (err) {
                console.log(err);
            }
            else {
                console.log({
                    userId : uid,
                    createAt : day,
                    data : [
                        {
                            val: value,
                            time: time
                        }
                    ]
                });
                if (docs.matchedCount == 0) {
                    model.create({
                        userId : uid,
                        createAt : day,
                        data : [
                            {
                                val: value,
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

