const express = require('express');
const bodyParser = require('body-parser');

const commentRouter = express.Router();

commentRouter.use(bodyParser.json());

commentRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the comments to you');
})
.post((req, res) => {
    res.end(`Will add the comments: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /comments');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('Deleting all celebs not supported');
});

module.exports = commentRouter;