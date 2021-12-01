const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpeedtestSchema = new Schema({
    resultDate: Date,
    ipAddress: String,
    country: String,
    region: String,
    city: String,
    latitude: String,
    longitude: String,
    download: Number,
    upload: Number,
    latency: Number,
    jitter: Number,
    testId: String,
    place: {
        type: mongoose.Types.ObjectId,
        ref: "Place",
    },
});

const Speedtest = mongoose.model('Speedtest', SpeedtestSchema);

module.exports = Speedtest;
