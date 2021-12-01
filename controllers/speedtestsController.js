const db = require('../models');

const index = (req, res) => {
    db.Speedtest.find({}, (err, foundSpeedtests) => {
        if (err) console.log('Error in speedtests#index:', err)

        if (!foundSpeedtests) return res.json({
            message: 'No Speedtests found in database.'
        })

        res.status(200).json({ speedtests: foundSpeedtests });
    })
}

const show = (req, res) => {
    db.Speedtest.findById(req.params.id, (err, foundSpeedtest) => {
        if (err) {
            console.log('Error in speedtests#show:', err);

            if (!foundSpeedtest) return res.json({
                message: 'There is no Speedtest with this ID in the db.'
            })

            return res.send("Incomplete speedtests#show controller function");
        }

        res.status(200).json({
            speedtest: foundSpeedtest
        });
    });
};

const create = (req, res) => {
    db.Speedtest.create(req.body, (err, savedSpeedtest) => {
        if (err) console.log('Error in speedtests#create:', err)

        res.status(201).json({ speedtest: savedSpeedtest })
    })
}

const update = (req, res) => {
    db.Speedtest.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedSpeedtest) => {
        if (err) {
            console.log('Error in speedtests#update:', err)

            return res.send("Incomplete speedtests#update controller function");
        }

        res.status(200).json({
            updatedSpeedtest
        });
    });
};

const destroy = (req, res) => {
    db.Speedtest.findByIdAndDelete(req.params.id, (err, deletedSpeedtest) => {
        if (err) {
            console.log('Error in speedtests#destroy:', err)

            return res.send("Incomplete speedtests#destroy controller function");
        }

        res.status(200).json(
            {
                deletedSpeedtest
            }
        );
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};
