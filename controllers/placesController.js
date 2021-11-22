const db = require('../models');

const index = (req, res) => {
    db.Place.find({}, (err, foundPlaces) => {
        if (err) console.log('Error in places#index:', err)

        if(!foundPlaces) return res.json({
            message: 'No Places found in database.'
        })

        res.status(200).json({ places: foundPlaces });
    })
}

const show = (req, res) => {
    db.Place.findById(req.params.id, (err, foundPlace) => {
        if (err) {
            console.log('Error in places#show:', err);

            if(!foundPlace) return res.json({
                message: 'There is no Place with this ID in the db.'
            })

            return res.send("Incomplete places#show controller function");
        }

        res.status(200).json({
            place: foundPlace
        });
    });
};

const create = (req, res) => {
    db.Place.create(req.body, (err, savedPlace) => {
        if (err) console.log('Error in places#create:', err)

        res.status(201).json({ place: savedPlace })
    })
}

const update = (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPlace) => {
        if (err) {
            console.log('Error in places#update:', err)

            return res.send("Incomplete places#update controller function");
        }

        res.status(200).json({
            updatedPlace
        });
    });
};

const destroy = (req, res) => {
    db.Place.findByIdAndDelete(req.params.id, (err, deletedPlace) => {
      if (err) {
        console.log('Error in places#destroy:', err)

        return res.send("Incomplete places#destroy controller function");
      }

      res.status(200).json(
        {
          deletedPlace
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
