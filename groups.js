module.exports = {
    getGroups: function getGroups(req, res, next){
	res.send("Get Groups: " + req.params.groupId);
    },

    getGroup: function getGroup(req, res, next){
	res.send("Get Group: " + req.params.groupId);
    },

    createGroup: function createGroup(req, res, next){
	res.send("Create Group: " + req.params.groupId);
    },

    updateGroup: function updateGroup(req, res, next){
	res.send("Update Group: " + req.params.groupId);
    },

    deleteGroup: function deleteGroup(req, res, next){
	res.send("Delete Group: " + req.params.groupId);
    }
}