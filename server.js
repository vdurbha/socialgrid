var restify = require("restify");

var people = require("./people.js");
var groups = require("./groups.js");
var activitystreams = require("./activitystreams.js");
var appdata = require("./appdata.js");
var albums = require("./albums.js");
var mediaitems = require("./mediaitems.js");
var messages = require("./messages.js");

var server = restify.createServer();

server.use(restify.acceptParser(server.acceptable));
server.use(restify.authorizationParser());
server.use(restify.dateParser());
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.throttle({
  burst: 100,
  rate: 50,
  ip: true,
  overrides: {
    '192.168.1.1': {
      rate: 0,        // unlimited
      burst: 0
    }
  }
}));
server.use(restify.conditionalRequest());

server.get("/people/:userId/@self", people.getPerson);
server.get("/people/:userId/:groupId/:relatedUserId", people.getPerson);
server.get("/people/:userId/:groupId", people.getPeople);
server.post("/people/:userId/:groupId", people.createRelationship);
server.post("/people/:userId/@self", people.updatePerson);
server.del("/people/:userId/@self", people.deletePerson);

server.get("/groups/:userId", groups.getGroups);
server.get("/groups/:userId/:groupId", groups.getGroup);
server.post("/groups/:userId", groups.createGroup);
server.put("/groups/:userId/:groupId", groups.updateGroup);
server.del("groups/:userId/:groupId", groups.deleteGroup);

server.get("/activitystreams/:userId/:groupId", activitystreams.getActivityStreams);
server.get("/activitystreams/:userId/:groupId/:appId", activitystreams.getAppActivityStreams);
server.get("/activitystreams/:userId/:groupId/:appId/:activityId", activitystreams.getAppActivityActivityStreams);
server.post("/activitystreams/:userId/@self", activitystreams.createActivityEntry);
server.put("/activitystreams/:userId/@self", activitystreams.updateActivityEntry);
server.del("/activitystreams/:userId/@self", activitystreams.deleteActivityEntry);

server.get("/appdata/:userId/:groupId", appdata.getAllAppData);
server.get("/appdata/:userId/:groupId/:appId", appdata.getAppData);
server.put("/appdata/:userId/@self", appdata.updateAppData);
server.put("/appdata/:userId/@self/:appId", appdata.updateAppData);
server.del("/appdata/:userId/@self", appdata.deleteAppData);
server.del("/appdata/:userId/@self/:appId", appdata.deleteAppData);

server.get("/albums/:userId/:groupId", albums.getAlbums);
server.get("/albums/:userId/:groupId/:albumId", albums.getAlbum);
server.post("/albums/:userId/@self", albums.createAlbum);
server.put("/albums/:userId/@self/:albumId", albums.updateAlbum);
server.del("/albums/:userId/@self/:albumId", albums.deleteAlbum);

server.get("/mediaItems/:userId/:groupId", mediaitems.getAllMediaItems);
server.get("/mediaItems/:userId/:groupId/:albumId", mediaitems.getAlbumMediaItems);
server.get("/mediaItems/:userId/:groupId/:albumId/:mediaItemId", mediaitems.getMediaItem);
server.post("/mediaItems/:userId/@self/:albumId", mediaitems.createMediaItem);
server.put("/mediaItems/:userId/@self/:albumId/:mediaItemId", mediaitems.updateMediaItem);
server.del("/mediaItems/:userId/@self/:albumId/:mediaItemId", mediaitems.deleteMediaItem);

server.get("/messages/:userId", messages.getMessageCollectionIds);
server.get("/messages/:userId/:messageCollectionId", messages.getMessages);
server.get("/messages/:userId/:messageCollectionId/:messageId", messages.getMessage);
server.post("/messages/:userId/@self/@outbox", messages.sendMessage);
server.post("/messages/:userId/@self", messages.createMessageCollection);
server.put("/messages/:userId/@self/:messageCollectionId/:messageId", messages.updateMessage);
server.put("/messages/:userId/@self/:messageCollectionId", messages.updateMessageCollection);
server.del("/messages/:userId/@self/:messageCollectionId", messages.deleteMessageCollection);
server.del("/messages/:userId/@self/:messageCollectionId/:messageId", messages.deleteMessage);

server.listen(8080, function() {
    console.log("%s listening at %s", server.name, server.url);
});