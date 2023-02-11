//import the connection to the database and the models in the database
const sequelize = require('../config/connection');
const { Post, Comment, User } = require('../models');

//import the seed data files
const postData = require('./postData.json');
const commentData = require('./commentData.json');
const userData = require('./userData.json');

//function to seed the data from the seed data files into the database tables
const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    console.log('\n----- USERS SEEDED -----\n');

    await Post.bulkCreate(postData);
    console.log('\n----- BLOGS SEEDED -----\n');

    await Comment.bulkCreate(commentData);
    console.log('\n----- COMMENTS SEEDED -----\n');

    process.exit(0);
}

seedDatabase();