const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {};

//include the commenter's username and the date created
Comment.init(
    {
        body: {
            type: DataTypes.STRING,
        },
        blog_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'blog',
              key: 'id',
            },
        },
        sequelize,
        modelName: 'comment',
    },
);

module.exports = Comment;