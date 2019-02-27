
var mongoose = require('mongoose');

var TodoModel = mongoose.model('Todo',{
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number
    }
});

module.exports = {
    todomodel: TodoModel
};