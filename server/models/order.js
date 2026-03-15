import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const Irder = sequelize.define("Order", {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})