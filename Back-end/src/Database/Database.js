import mongoose from "mongoose";
const server = '127.0.0.1:27017';
const database = 'ch_Users';


class Database {
    constructor() {
        this._connect()
    }
    _connect() {
        mongoose.connect(`mongodb://${server}/${database}`)
        .then(() => {
            console.log('Database connection successful✅✅')
        })
        .catch(err => {
            console.error('Database connection error' + err)
        })
    }
}

export default Database;