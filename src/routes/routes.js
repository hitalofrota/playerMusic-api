const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;

router.get('/songs', async (req, res) => {
    try {
        const resources = await cloudinary.api.resources({
            type: 'upload',
            resource_type: 'video',   
        });
        const songs = resources.resources.map(resource => ({
            url: resource.secure_url,
            name: resource.public_id.split('/').pop()
        }));
        res.json(songs);
    } catch (err) {
        console.error('Erro ao listar músicas do Cloudinary:', err);
        res.status(500).send('Erro ao listar músicas');
    }
});

router.get('/play/:song', async (req, res) => {
    const songName = decodeURIComponent(req.params.song);
    try {
        const resources = await cloudinary.api.resources({
            type: 'upload',
            resource_type: 'video',
        });
        const song = resources.resources.find(resource => resource.public_id.endsWith(songName));
        if (song) {
            res.redirect(song.secure_url);
        } else {
            res.status(404).send('Música não encontrada');
        }
    } catch (err) {
        console.error('Erro ao reproduzir música do Cloudinary:', err);
        res.status(500).send('Erro ao reproduzir música');
    }
});

module.exports = router;
