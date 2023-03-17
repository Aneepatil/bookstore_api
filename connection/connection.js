const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://bookstore:Bookstore@cluster0.mvx2xbt.mongodb.net/bookStore?retryWrites=true&w=majority').then(()=>console.log('MongoDB Connected Successfully.....'))