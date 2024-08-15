const { Schema, model } = require("mongoose");

const EmployeeSchema = {
    id: {
        type: String,
        unique: true,
        required: [true, "The field id is required"],
        maxlength: [15, "Max 15 characters"],
    },
    document: {
        type: String,
        unique: true,
        required: [true, "The field document is required"],
        maxlength: [15, "Max 15 characters"],
    },
    name: {
        type: String,
        required: [true, "The field name is required"],
        minlength: [3, "Min 3 characters"],
        maxlength: [50, "Max 50 characters"],
    },
    dateofentry: {
        type: String,
        unique: true,
        required: [true, "The field dateofentry is required"],
    },
    withdrawaldate: {
        type: String,
        unique: true,
        
    },
    salary: {
        type: String,
        unique: true,
        required: [true, "The field salary is required"],
    },
};

module.exports = model("Employee", EmployeeSchema, "employee");


