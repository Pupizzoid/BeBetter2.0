const {db} = require('./mongodbActions');

class ActionsFactory {
	collectionName = null;

	constructor(collectionName) {
		this.collectionName = collectionName;
	}

	get = () => {
		return db.getItems(this.collectionName);
	}

	add = (param) => {
		return db.addItem(this.collectionName, param)
	}
	
	delete = (param) => {
		return db.deleteItemById(this.collectionName, param);
	}

	find = (param) => {
		console.log(param, 'factory');
		return db.findItem(this.collectionName, param);
	}

	findOne = (param) => {
		return db.findOneItem(this.collectionName, param);
	}

	findById = (id) => {
		return db.findById(this.collectionName, id);
	}

	update = (param, id) => {
		return db.updateItemById(this.collectionName, param, id);
	}
}

module.exports = {
	ActionsFactory
}