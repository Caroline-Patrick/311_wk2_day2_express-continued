// const express= require('express');
// const router = express.Router();
// const commentsController = require('../controllers/comments')

// // router syntax= router.get('/path name after port that request is coming through', make this our response ->controllerFile.specificMethodToCall)

// //get all comments
// router.get('/comments', commentsController.getComments);

// //get comment by id#
// router.get('/comments/:_id', commentsController.findCommentX )

// // post new comment
// router.post('/comments', commentsController.postComment);

// module.exports = router;

const express = require('express');
const router = express.Router();
const commentsController = require('../Controllers/comments');

router.get("/comments", commentsController.list);

router.get("/comments/:id", commentsController.show);

router.post("/comments", commentsController.create);

module.exports = router;