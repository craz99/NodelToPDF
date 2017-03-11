/**
 * Created by kburnett on 3/5/17.
 */
// Pushbullet token o.A5Ggpc50V6d54Bpii0w1Ve6jwV7uG5UP

var PushBullet = require('pushbullet');
var pusher = new PushBullet('o.A5Ggpc50V6d54Bpii0w1Ve6jwV7uG5UP');

pusher.me(function(err, response) {
    // console.log("Me info " + JSON.stringify(response, null, 2));
});

options = {
    // modified_after: 1488767603.967678
    //                 1488758004.410924
};
pusher.history(options, function(error, response) {
    // console.log("History " + JSON.stringify(response["pushes"], null, 2));
    var pushes = response["pushes"];
    for (var i = 0; i < pushes.length; i++) {
        console.log(pushes[i].title + " " + pushes[i].url + " " + pushes[i].modified);
    }
});

pusher.subscriptions(options, function(error, response) {
    // console.log("Subscriptions " + JSON.stringify(response, null, 2));
});

pusher.channelInfo("novelupdate", function(error, response){
    // console.log("Channel Info " + JSON.stringify(response, null, 2));
});

// var stream = pusher.stream();
//
// stream.on('connect', function() {
//     console.log("Stream Connected");
// });
//
// stream.on('tickle', function(type) {
//     console.log("Tickle " + type);
// });
//
// stream.on('push', function(push) {
//     console.log("Push Recieved " + JSON.stringify(push, null, 2))
// });
//
// stream.connect();
