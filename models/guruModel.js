const db = require('../config/database');

const Guru = {
    create: (data, callback) => {
        const sql = 'INSERT INTO guru (nama, nik_guru) VALUES (?, ?)';
        db.query(sql, [data.nama, data.nik_guru], callback);
    },

    getAll: (callback) => {
        const sql = 'SELECT * FROM guru';
        db.query(sql, callback);
    },

    getById: (id, callback) => {
        const sql = 'SELECT * FROM guru WHERE id = ?';
        db.query(sql, [id], callback);
    },

    update: (id, data, callback) => {
        const sql = 'UPDATE guru SET nama = ?, nik_guru = ? WHERE id = ?';
        db.query(sql, [data.nama, data.nik_guru, id], callback);
    },

    delete: (id, callback) => {
        const sql = 'DELETE FROM guru WHERE id = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Guru;
