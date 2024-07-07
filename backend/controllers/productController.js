import {pool} from '../db_connect.js';

export const getAll = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT * FROM cars', (err, rows) => {
            connection.release();
            if (err) throw err;
            res.send(rows);
            console.log('Data received from Db');
        });
    })
};