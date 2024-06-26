const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    bookName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    endDate: {
        type: Date,
        required: true,
        default: function () {
            return new Date(this.startDate.getTime() + 30 * 24 * 60 * 60 * 1000);
        }
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected', 'completed'],
        default: 'pending'
    }, 
    quantity: {
            type: Number,
            required: true
    }
});

const Order = mongoose.model('THEODOIMUONSACH', orderSchema);

module.exports = Order;
