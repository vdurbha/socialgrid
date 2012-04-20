module.exports = {
    getPerson: function getPerson(req, res, next){
	res.send("Get Person: " + req.params.userId);
    },

    getPeople: function getPeople(req, res, next){
	res.send("Get People: " + req.params.userId + " " + req.params.groupId);
    },

    createRelationship: function createRelationship(req, res, next){
	res.send("Create Relationship: " + req.params.userId);
    },

    updatePerson: function updatePerson(req, res, next){
	res.send("Update Person: " + req.params.userId);
    },

    deletePerson: function deletePerson(req, res, next){
	res.send("Delete Person: " + req.params.userId);
    }
}