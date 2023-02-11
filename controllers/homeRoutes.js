const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        //get all the posts
        const postData = await Post.findAll({
            // include: [
            //     {
            //         model: User,
            //         attributes: ['username'],
            //     },
            // ],
        });

        // Serialize the data for the posts to be used in the handlebar template
        const posts = postData.map((post) => post.get({ plain: true }));

        // Render the homepage and set the logged_in variable
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

