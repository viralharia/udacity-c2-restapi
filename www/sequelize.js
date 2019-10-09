"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = require("./config/config");
const config_2 = require("./config/config");
let configurationObj;
if (config_2.environment == "PROD") {
    configurationObj = config_1.config.postgresql.prod;
}
else {
    configurationObj = config_1.config.postgresql.dev;
}
console.log(`db host - ${configurationObj.host}, username - ${configurationObj.username}, ${process.env.DEPLOYMENT_ENV}`);
// Instantiate new Sequelize instance!
exports.sequelize = new sequelize_typescript_1.Sequelize({
    "username": configurationObj.username,
    "password": configurationObj.password,
    "database": configurationObj.database,
    "host": configurationObj.host,
    "port": configurationObj.port,
    dialect: 'postgres',
    storage: ':memory:',
});
//# sourceMappingURL=sequelize.js.map