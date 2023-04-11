const express = require("express");
const Todo = require("../db/models/Todo");
const app = express.Router();
const Joi = require("joi");

app.get("/", async (_, res) => {
    try {
        const todos = await Todo.find({}, "-__v", { lean: true })
        res.status(200).json({ todos })
    } catch (error) {
        console.log(error);
        res.status(500).jason({ message: error.message })
    }
});

app.post("/", async (req, res) => {
    const schema = Joi.object().keys({
        title: Joi.string().required().error(new Error("campo richiesto")),
        content: Joi.string().required().error(new Error("campo richiesto")),
    });
    try {
        const body = await schema.validateAsync(req.body);
        const todo = await new Todo({
            title: body.title,
            content: body.content
        }).save();
        res.status(201).json({ todo: todo?._doc || todo });
    } catch (error) {
    }

});

module.exports = app;