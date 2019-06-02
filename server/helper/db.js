const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(process.env.DBSTRING, {useCreateIndex: true, useNewUrlParser: true, useFindAndModify:false });
    mongoose.connection.on('open', () => {
        console.log('MongoDB: connected');
    });

    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    })
}