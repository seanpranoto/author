const Author = require("../models/index.model");

module.exports = {
    findAll: (req, res) => {
        Author.find()
            .then(authors => res.json(authors))
            .catch(err => res.json(err));
    },
    findOne: (req, res) => {
        Author.findById(req.params.id)
            .then(author => res.json(author))
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        Author.create(req.body)
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err));
    },
    update: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, useFindAndModify:false })
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err));
    },
    delete: (req, res) => {
        Author.findByIdAndRemove(req.params.id, req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    }
};