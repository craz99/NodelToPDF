var Datastore = require('nedb');
db = {};
db.novels = new Datastore({ filename: 'data/novels.db', autoload: true });

var docs = [{ title: 'Coiling Dragon'
    , text: 'Linley\'s Adventures'
//     , n: 5
//     , today: new Date()
//     , nedbIsAwesome: true
//     , notthere: null
//     , notToBeSaved: undefined  // Will not be saved
//     , fruits: [ 'apple', 'orange', 'pear' ]
//     , infos: { name: 'nedb' }
}, { title: 'The Desolate Era'
    , text: 'Ning\'s Adventures'}];

db.novels.insert(docs, function (err, newDoc) {   // Callback is optional
    // newDoc is the newly inserted document, including its _id
    // newDoc has no key called notToBeSaved since its value was undefined
});

db.novels.find({}, function (err, docs) {
    console.log(docs)
});


/**
 * Created by kburnett on 2/17/17.
 */
var FeedParser = require('feedparser');
var request = require('request'); // for fetching the feed

// var req = request('http://www.novelupdates.com/rss.php?uid=10461&unq=56941d7c17f13&type=0&lid=local')

var fs = require('fs')
    , feed = __dirname+'/data/rss.xml';

fs.createReadStream(feed)
    .on('error', function (error) {
        console.error(error);
    })
    .pipe(new FeedParser())
    .on('error', function (error) {
        console.error(error);
    })
    .on('meta', function (meta) {
        console.log('===== %s =====', meta.title);
    })
    .on('readable', function() {
        var stream = this, item;
        while (item = stream.read()) {
            console.log('Got article: %s %s', item.title, item.link );
        }
    });

//
// req.on('error', function (error) {
//     // handle any request errors
// });
//
// req.on('response', function (res) {
//     var stream = this; // `this` is `req`, which is a stream
//
//     if (res.statusCode !== 200) {
//         this.emit('error', new Error('Bad status code'));
//     }
//     else {
//         stream.pipe(feedparser);
//     }
// });
//
// feedparser.on('error', function (error) {
//     // always handle errors
// });
//
// feedparser.on('readable', function () {
//     // This is where the action is!
//     var stream = this; // `this` is `feedparser`, which is a stream
//     var meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
//     var item;
//
//     while (item = stream.read()) {
//         console.log(item);
//     }
// });