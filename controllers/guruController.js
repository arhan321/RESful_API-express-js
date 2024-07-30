const Guru = require('../models/guruModel');

exports.create = (req, res) => {
    const data = req.body;
    Guru.create(data, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send({ id: result.insertId, ...data });
    });
};

exports.getAll = (req, res) => {
    Guru.getAll((err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(results);
    });
};

exports.getById = (req, res) => {
    const id = req.params.id;
    Guru.getById(id, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.length === 0) {
            return res.status(404).send({ message: 'Guru not found' });
        }
        res.status(200).send(result[0]);
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Guru.update(id, data, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send({ id, ...data });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Guru.delete(id, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send({ message: 'Guru deleted' });
    });
};
