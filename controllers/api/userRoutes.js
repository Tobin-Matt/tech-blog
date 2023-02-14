const router = require('express').Router();
const { User } = require('../../models');

//add POST route to create a new User


//add POST route to login
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username } });
        console.log(userData);
        if (!userData) {
            res
              .status(400)
              .json({ message: 'Incorrect Username or Password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        console.log(validPassword);
        if (!validPassword) {
            res
              .status(400)
              .json({ message: 'Incorrect email or password, please try again' });
            return;
        }
        
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;
            
            res.json({ user: userData, message: 'You are now logged in!' });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;