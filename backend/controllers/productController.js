import {pool} from '../db_connect.js';

export const getAll = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT * FROM cars', (err, rows) => {
            connection.release();
            if (err) throw err;
            res.send(rows);
        });
    })
};

export const getAreas = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT * FROM areas', (err, rows) => {
            connection.release();
            if (err) throw err;
            res.send(rows);
        });
    })  
};