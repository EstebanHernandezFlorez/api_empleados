const Employee = require("../models/employee");

const getEmployee = async (req, res) => {
    const employee = await Employee.find();
    res.json(employee);
}


module.export =
//exportar funcion 
{
    getEmployee

}