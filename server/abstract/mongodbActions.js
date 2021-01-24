const { ModelFactory } = require('./modelFactory');

const db = {

	getItems: (collectionName) => {
		const model = ModelFactory.getModel(collectionName);
		return model.find({}).exec();
	},

	addItem: (collectionName, data) => {
		const model = ModelFactory.getModel(collectionName);
		return new model(data).save();
	},

	findItem: (collectionName, data) => {
		console.log(data, 'action');
		const model = ModelFactory.getModel(collectionName);
		return model.find(data).exec();
	},

	findOneItem: (collectionName, data) => {
		console.log(data, 'action');
		const model = ModelFactory.getModel(collectionName);
		return model.findOne(data).exec();
	},

	updateItemById: (collectionName, data, id) => {
		const model = ModelFactory.getModel(collectionName);
		return model.findByIdAndUpdate(id, data).exec();
	},

	findItemById: (collectionName, id) => {
		const model = ModelFactory.getModel(collectionName);
		return model.findById(id).exec();
	},

	deleteItemById: (collectionName, id) => {
		const model = ModelFactory.getModel(collectionName);
		return model.findOneAndDelete(id).exec();
	}
}

module.exports = {
	db
}