const User = require('../models/User');

class ModelFactory {

	static getModel(collectionName) {
		switch (collectionName) {
			case 'User': return User;
			// case 'Truck': return Truck;
			default: return null;
		}
	}
}

module.exports = {
	ModelFactory
}