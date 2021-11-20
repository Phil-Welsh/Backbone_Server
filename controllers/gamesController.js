const db = require('../models');

const index = (req, res) => {
    db.Game.find({}, (err, foundGames) => {
        if (err) console.log('Error in games#index:', err)

        if(!foundGames) return res.json({
            message: 'No Games found in database.'
        })

        res.status(200).json({ games: foundGames });
    })
}

const show = (req, res) => {
    db.Game.findById(req.params.id, (err, foundGame) => {
        if (err) {
            console.log('Error in games#show:', err);

            if(!foundGame) return res.json({
                message: 'There is no game with this ID in the db.'
            })

            return res.send("Incomplete games#show controller function");
        }

        res.status(200).json({
            game: foundGame
        });
    });
};

const create = (req, res) => {
    db.Game.create(req.body, (err, savedGame) => {
        if (err) console.log('Error in games#create:', err)

        // Validations and error handling here

        res.status(201).json({ game: savedGame })
    })
}

const update = (req, res) => {
    db.Game.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedGame) => {
        if (err) {
            console.log('Error in games#update:', err)

            return res.send("Incomplete games#update controller function");
        }

        res.status(200).json({
            updatedGame
        });
    });
};

const destroy = (req, res) => {
    db.Game.findByIdAndDelete(req.params.id, (err, deletedGame) => {
      if (err) {
        console.log('Error in games#destroy:', err)

        return res.send("Incomplete games#destroy controller function");
      }

      res.status(200).json(
        {
          deletedGame
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
