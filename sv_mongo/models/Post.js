const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PostSchema = new Schema(
    {
        title: {
            type: String,
            require: true,
            unique: false
        },
        pdesc: {
            type: String,
            require: false
        },
        url: {
            type: String,
        },
        status: {
            type: String,
            enum: ['Will Do', 'In Work', 'Complete']
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
    }
)
module.exports = mongoose.model('posts', PostSchema)

