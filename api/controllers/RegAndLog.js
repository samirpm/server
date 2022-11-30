var sequelize = require('../../config/database')
import { NewOrder } from '../models/ModelReg';


const RegANdLog = () => {
    const registration = async (req, res) => {
        var reg = new NewOrder
        const { body } = req;
        try {
            reg = body;
            let data = await sequelize.query("INSERT INTO details(name,number,email,password)VALUES('" + name + "','" + number + "','" + email + "','" + password + "')", { type: sequelize.QueryTypes.INSERT })
            if (data) {
                return res.status(200).json({ msg: 'Inserted successfully' })
            } else {
                return res.status(200).json({ msg: 'Inserted failed' })
            }
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error, message: 'Internal Server Error' })
        }
    }

    const SignIn = async (req, res) => {
        try {
            const { body } = req;
            let Email = body.email;
            let password = body.password;

            if (Email == "Guest" && password == "Guest") {
                res.status(200).send({ msg: "guest login successfull" })
            }

            else if (Email && password) {

                var data = await sequelize.query(`SELECT * FROM details WHERE email='${Email}' AND  password='${password}'`, { type: sequelize.QueryTypes.SELECT })
                if (data.length > 0)
                    return res.status(200).send({ msg: 'success' })
                else
                    return res.status(200).send({ msg: 'Enter valid email or password' })


            }
        } catch (error) {
            console.log(error)
            res.status(500).send({ msg: "Internal Server Error" })
        }
    }


    return {
        registration,
        SignIn
    }

};
module.exports = RegANdLog;