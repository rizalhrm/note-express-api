const express = require('express');
const router = express.Router();
const Notes = require('./models/notes');

router.get('/notes', function(req, res) {
    Notes.find()
      .then(function(notes) {
        res.send(notes);
      });
  });
  
router.get('/notes/:id', function(req, res, next) {
    Notes.findOne({_id: req.params.id})
        .then(function(note) {
        res.send(note);
        })
        .catch(next)
});

router.post('/notes', function(req, res, next) {
    const {title, content} = req.body;
  
    Notes.create(req.body)
      .then( function(result) {
        res.send(result);
      })
      .catch(next)
});

router.put('/notes/:id', function(req, res) {
    Notes.findOneAndUpdate({_id: req.params.id}, req.body)
      .then(function(result) {
        Notes.findOne({_id: req.params.id})
          .then(function(note) {
            res.send(note);
          })
      });
  });
  
router.delete('/notes/:id', function(req, res) {
    Notes.findOneAndRemove({_id: req.params.id})
        .then(function(result){
            res.send(result)
        });
});

module.exports = router;