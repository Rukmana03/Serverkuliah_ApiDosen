const express = require('express');
const router = express.Router();
const { connectionDosen } = require('../models/db');

// GET /dosen
router.get('/', (_req, res) => {
    connectionDosen.query('SELECT * FROM dosen', (error, results) => {
        if (error) {
            console.error('Error fetching dosen:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            res.json(results);
        }
    });
});

// GET /dosen/:nip
router.get('/:nip', (req, res) => {
    const dosenNip = req.params.nip;
    connectionDosen.query('SELECT * FROM dosen WHERE nip=?', [dosenNip], (error, results) => {
        if (error) {
            console.error('Error fetching dosen', error);
            res.status(500).json({ message: 'Internal Server Error' });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'dosen not found' });
        } else {
            res.json(results[0]);
        }
    });
});

// PUT /dosen/:nip
router.put('/:nip', (req, res) => {
    const dosenNip = req.params.nip;
    const { nama, gender, prodi, alamat } = req.body;
    connectionDosen.query('UPDATE dosen SET nama = ?, gender = ?, prodi = ?, alamat = ? WHERE nip = ?',
        [nama, gender, prodi, alamat, dosenNip], (error) => {
            if (error) {
                console.error('Error updating dosen:', error);
                res.status(500).json({ message: 'Internal Server Error' });
            } else {
                res.json('Updating dosen successfully');
            }
        });
});

// POST /dosen
router.post('/', (req, res) => {
    const { nip, nama, gender, prodi, alamat } = req.body;
    connectionDosen.query('INSERT INTO dosen (nip, nama, gender, prodi, alamat) VALUES (?, ?, ?, ?, ?)',
        [nip, nama, gender, prodi, alamat], (error) => {
            if (error) {
                console.error('Error adding dosen:', error);
                res.status(500).json({ message: 'Internal Server Error' });
            } else {
                res.json('Adding dosen successfully');
            }
        });
});

// DELETE /dosen/:nip
router.delete('/:nip', (req, res) => {
    const dosenNip = req.params.nip;
    connectionDosen.query('DELETE FROM dosen WHERE nip = ?', [dosenNip], (error) => {
        if (error) {
            console.error('Error deleting dosen:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            res.json('Deleting dosen successfully');
        }
    });
});

module.exports = router;
