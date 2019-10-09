import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';
import { environment } from './config/config';


let configurationObj;
if(environment == "PROD"){
  configurationObj = config.postgresql.prod;
}else{
  configurationObj = config.postgresql.dev;
}

console.log(`db host - ${configurationObj.host}, username - ${configurationObj.username}, ${process.env.DEPLOYMENT_ENV}`);

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": configurationObj.username,
  "password": configurationObj.password,
  "database": configurationObj.database,
  "host":     configurationObj.host,
  "port": configurationObj.port,

  dialect: 'postgres',
  storage: ':memory:',
});

