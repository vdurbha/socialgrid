module.exports = {
    getAlbums: function getAlbums(req, res, next){
	res.send("Get Albums: " + req.params.userId + "/" + req.params.groupId);
    },

    getAlbum: function getAlbum(req, res, next){
	res.send("Get Album: " + req.params.userId + "/" + req.params.groupId);
    },

    createAlbum: function createAlbum(req, res, next){
	res.send("Create Album: " + req.params.userId + "/" + req.params.groupId);
    },

    updateAlbum: function updateAlbum(req, res, next){
	res.send("Update Album: " + req.params.userId + "/" + req.params.groupId);
    },

    deleteAlbum: function deleteAlbum(req, res, next){
	res.send("Delete Album: " + req.params.userId + "/" + req.params.groupId);
    }
}