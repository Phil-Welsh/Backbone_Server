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
    serverName: String,
    serverSponsor: String,
    browserName: String,
    browserVersion: String,
    userAgent: String,
    ispName: String,
    ispNameRaw: String,
    OS: String,
    download: Number,
    upload: Number,
    latency: Number,
    jitter: Number,
    testId: String
});

const Speedtest = mongoose.model('Speedtest', SpeedtestSchema);

module.exports = Speedtest;
