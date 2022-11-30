let sequelize = require("../../config/database")

const customer = () => {
    const cusRegister = async (req, res) => {
        const { body } = req;
        let name = body.name;
        let address = body.address;
        let number = body.number

        let Num = await sequelize.query("SELECT MobNo FROM customer WHERE MobNo =" + number + "")
        Num = Num[0]
        try {
            if (Num.length > 0) {
                res.status(200).json({ msg: 'number already existed' })
            } else {
                await sequelize.query("UPDATE invoiceno SET AccNo = AccNo+1")
                var AccNo = await sequelize.query("SELECT AccNo AS 'value' FROM invoiceno")
                AccNo = AccNo[0][0].value;
                await sequelize.query("INSERT INTO customer(id,idd,Name,address,code,Credit,DueDate,Giftcard,MobNo,UID,place,`group`,state,GSTIN,statecode,Point,opening,openingDate,status,moredetails)VALUES(101012," + AccNo + ",'" + name + "','" + address + "',101,1000.00,'2022-11-18','nothing','" + number + "','something','chelembra','chelembra','kerala','DFD558585','5552555',10.00,0.5,'2000-03-25','active','{\"name\":\"samir\"}')")
                res.status(200).json({ msg: 'success' })
            }
        }

        catch (error) {
            res.status(500).json({ msg: 'Internal server error' })
        }




    }
    return {
        cusRegister
    }
}
module.exports = customer