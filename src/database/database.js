import {Sequelize,DataTypes} from 'sequelize';
import config from '../../config/config'

const sequelize =new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);
export const User = require('../model/user')(sequelize,DataTypes);
export default sequelize;