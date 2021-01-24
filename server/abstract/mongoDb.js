const { ActionsFactory } = require('./actionsFactory');

class DbFacade {
	 static instance = () => {
			if (DbFacade._instance == null) {
				DbFacade._instance = new DbFacade();
			}
			return DbFacade._instance;
	}
	static _instance = null;

	users;

	constructor() {
		this.users = new ActionsFactory("User");
	}
}

module.exports = {
	DbFacade
}