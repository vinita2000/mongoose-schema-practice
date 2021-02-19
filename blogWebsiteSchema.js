const mongoose = require('mongoose');
/* this is the rough schema for the database for blog website
{
    _id: POST_ID
    title: TITLE_OF_POST, 
    description: POST_DESCRIPTION,
    by: POST_BY,
    url: URL_OF_POST,
    tags: [TAG1, TAG2, TAG3],
    likes: TOTAL_LIKES, 
    comments: [	
       {
          user:'COMMENT_BY',
          message: TEXT,
          dateCreated: DATE_TIME,
          like: LIKES ,
          comments: there can be subcomments on the comment to the original post,
          createdAt: comment_creation_date
       },
       {
          user:'COMMENT_BY',
          message: TEXT,
          dateCreated: DATE_TIME,
          like: LIKES,
          comments: there can be subcomments on the comment to the original post,
          createdAt: comment_creation_date
       }
    ],
    createdAt: post_creation_date
 }
 */

const blogSchema = new mongoose.Schema({
    id: String,
    title: String,
    description: String,
    tags: [String],
    totalLikes: Number,
    author: String,
    authorID: String,
    url: String,
    comments: [
        {
            user_ID: String,
            totalLikes: Number,
            message: String,
            createdAt: {
                type: Date,
                default: Date.now()
            },
            comments: [
                {
                    user_ID: String,
                    totalLikes: Number,
                    message: String,
                    createdAt: {
                        type: Date,
                        default: Date.now()
                    }
                }
            ]
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const outputSchema = mongoose.model('blog', blogSchema);
