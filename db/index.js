const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_URI, null,);
        console.log("db connected");
    } catch (error) {
        console.log(error);
    }
}

const models = {
    Todo: require("./models/Todo"),
}

module.exports = {
    connect,
    ...mmodels,
};