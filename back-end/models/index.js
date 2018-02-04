//Connect
require('dotenv').config();

const Sequelize = require('sequelize');

// //connection to heroku and local comp for three people.
let localHost = process.env.AARONSLOCALMACHINE || process.env.JOSHUASLOCALMACHINE || process.env.RICKYSLOCALMACHINE;
let sequelize = new Sequelize(process.env.DATABASE_URL || localHost.aaron || localHost.josh || 'postgres://rickytranmer@localhost:5432/tunr_relationships' );

//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

let Item = sequelize.import("./item");
let User = sequelize.import("./user");
let ShippingAddress = sequelize.import("./shippingAddress");
let Order = sequelize.import("./order");


module.exports.models = {
	Item: Item,
	User: User,
	ShippingAddress: ShippingAddress,
	Order: Order
};