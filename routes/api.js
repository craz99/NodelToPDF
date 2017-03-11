/*
 * Serve JSON to our AngularJS client
 */

// GET

exports.novels = function (req, res) {
    var novels = [];
    db.novels.find({}, function (err, docs) {
        docs.forEach(function (novel, i) {
            novels.push(novel);
        });
        res.json({
            novels: novels
        });
    });
};

exports.novel = function (req, res) {
    var id = req.params.id;
    var novel = {};
    db.novels.find({ _id:id }, function (err, docs) {
        novel = docs[0];
        res.json({
            novel: novel
        });
    });
};

// POST
exports.addNovel = function (req, res) {
    var doc = { title: req.body.title
        , text: req.body.text };
    db.novels.insert(doc, function (err, newDoc) {   // Callback is optional
                                                      // newDoc is the newly inserted document, including its _id
                                                      // newDoc has no key called notToBeSaved since its value was undefined
    });
    res.json(req.body);
};

// PUT
exports.editNovel = function (req, res) {
    var id = req.params.id;

    db.novels.update({ _id: id }, { $set: { title: req.body.title, text: req.body.text } }, { multi: true }, function (err, numReplaced) {
        if (numReplaced > 0) {
            res.json(true);
        } else {
            res.json(false);
        }
    });

};

// DELETE
exports.deleteNovel = function (req, res) {
    var id = req.params.id;
    db.novels.remove({ _id: id }, {}, function (err, numRemoved) {
        if (numRemoved == 1) {
            res.json(true);
        } else {
            res.json(false);
        }
    });

};