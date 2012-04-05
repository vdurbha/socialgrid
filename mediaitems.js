module.exports = {
    getAllMediaItems: function getAllMediaItems(req, res, next){
	res.send("Get All MediaItems: " + req.params.userId + "/" + req.params.groupId);
    },

    getAlbumMediaItems: function getAlbumMediaItems(req, res, next){
	res.send("Get Album MediaItems: " + req.params.userId + "/" + req.params.groupId);
    },

    getMediaItem: function getMediaItem(req, res, next){
	res.send("Get MediaItem: " + req.params.userId + "/" + req.params.groupId);
    },

    createMediaItem: function createMediaItem(req, res, next){
	res.send("Create MediaItem: " + req.params.userId + "/" + req.params.groupId);
    },

    updateMediaItem: function updateMediaItem(req, res, next){
	res.send("Update MediaItem: " + req.params.userId + "/" + req.params.groupId);
    },

    deleteMediaItem: function deleteMediaItem(req, res, next){
	res.send("Delete MediaItem: " + req.params.userId + "/" + req.params.groupId);
    }
}