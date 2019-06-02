const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodosSchema = new Schema({
    text: {
        type:String,
        required: true,
    }
});

module.exports = mongoose.model('Todos', TodosSchema);