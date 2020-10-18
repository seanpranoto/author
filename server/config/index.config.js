const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/authors", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})
    .then(res => console.log("Established connection to the database"))
    .catch(err => console.log({ Errror: err }));