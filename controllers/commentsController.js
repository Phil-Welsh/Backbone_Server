const db = require('../models');
const ObjectId = require('mongodb').ObjectId;

const index = (req, res) => {

    const placeid = req.headers["placeid"]

    db.Comment.find( { place: placeid }, (err, foundComments) => {
        if (err) console.log('Error in comments#index:', err)

        if (!foundComments) return res.json({
            message: 'No Comments found in database.'
        })

        res.status(200).json({ comments: foundComments });
    }).populate("user")
}

const show = (req, res) => {
    db.Comment.findById(req.params.id, (err, foundComment) => {
        if (err) {
            console.log('Error in comments#show:', err);

            if (!foundComment) return res.json({
                message: 'There is no comment with this ID in the db.'
            })

            return res.send("Incomplete comments#show controller function");
        }

        res.status(200).json({
            place: foundComment
        });
    });
};

const create = (req, res) => {
    db.Comment.create(req.body, (err, savedComment) => {
        if (err) console.log('Error in comments#create:', err)

        res.status(201).json({ comment: savedComment })
    })
}

const update = (req, res) => {
    db.Comment.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedComment) => {
        if (err) {
            console.log('Error in comments#update:', err)

            return res.send("Incomplete comments#update controller function");
        }

        res.status(200).json({
            updatedComment
        });
    });
};

const destroy = (req, res) => {
    db.Comment.findByIdAndDelete(req.params.id, (err, deletedComment) => {
        if (err) {
            console.log('Error in comments#destroy:', err)

            return res.send("Incomplete comments#destroy controller function");
        }

        res.status(200).json(
            {
                deletedComment
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
