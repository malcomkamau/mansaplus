import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email:DataTypes.STRING,
    password:DataTypes.STRING,
});

export default User;
