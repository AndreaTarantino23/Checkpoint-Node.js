const mongoose = require("mongoose");
const { schema, model } = mongoose;

const ToDoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,

        },
        content: {
            type: String,
            require: true,
        }
    },
    {
        strict: true,
        timestamps: true,
    }
);

module.exports = model("Todo", ToDoSchema);