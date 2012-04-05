module.exports = {
    getActivityStreams: function getActivityStreams(req, res, next){
	res.send("Get ActivityStreams: " + req.params.userId + "/" + req.params.groupId);
    },

    getAppActivityStreams: function getAppActivityStreams(req, res, next){
	res.send("Get AppActivityStreams: " + req.params.userId + "/" + req.params.groupId);
    },

    getAppActivityActivityStreams: function getAppActivityActivityStreams(req, res, next){
	res.send("Get AppActivity ActivityStreams: " + req.params.userId + "/" + req.params.groupId);
    },

    createActivityEntry: function createActivityEntry(req, res, next){
	res.send("Create Activity Entry: " + req.params.userId + "/" + req.params.groupId);
    },

    updateActivityEntry: function updateActivityEntry(req, res, next){
	res.send("Update Activity Entry: " + req.params.userId + "/" + req.params.groupId);
    },

    deleteActivityEntry: function deleteActivityEntry(req, res, next){
	res.send("Delete Activity Entry: " + req.params.userId + "/" + req.params.groupId);
    }
}