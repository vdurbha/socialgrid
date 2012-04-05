module.exports = {
    getMessageCollectionIds: function getMessageCollectionIds(req, res, next){
	res.send("Get Message Collection Ids: " + req.params.userId);
    },

    getMessages: function getMessages(req, res, next){
	res.send("Get Messages: " + req.params.userId);
    },

    getMessage: function getMessage(req, res, next){
	res.send("Get Message: " + req.params.userId);
    },

    sendMessage: function sendMessage(req, res, next){
	res.send("Send Message: " + req.params.userId);
    },

    createMessageCollection: function createMessageCollection(req, res, next){
	res.send("Create Message Collection: " + req.params.userId);
    },

    updateMessage: function updateMessage(req, res, next){
	res.send("Update Message: " + req.params.userId);
    },

    updateMessageCollection: function updateMessageCollection(req, res, next){
	res.send("Update MessageCollection: " + req.params.userId);
    },

    deleteMessageCollection: function deleteMessageCollection(req, res, next){
	res.send("Delete MessageCollection: " + req.params.userId);
    },

    deleteMessage: function deleteMessage(req, res, next){
	res.send("Delete Message: " + req.params.userId);
    }
}