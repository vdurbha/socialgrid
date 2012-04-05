module.exports = {
    getAllAppData: function getAllAppData(req, res, next){
	res.send("Get All AppData: " + req.params.userId + "/" + req.params.groupId);
    },

    getAppData: function getAppData(req, res, next){
	res.send("Get AppData: " + req.params.userId + "/" + req.params.groupId);
    },

    updateAppData: function updateAppData(req, res, next){
	res.send("Update AppData: " + req.params.userId + "/" + req.params.groupId);
    },

    deleteAppData: function deleteAppData(req, res, next){
	res.send("Delete AppData: " + req.params.userId + "/" + req.params.groupId);
    }
}