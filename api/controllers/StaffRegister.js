var sequelize = require('../../config/database')

const Checker = () => {
    const staffLogin = async (req, res) => {
        const { body } = req;
        try {
            var number = body.number;
            if (number) {
                let data = await sequelize.query("SELECT * FROM staff_register WHERE mob_staff ='" + number + "'")
                if (data.length == 0) {
                    res.status(200).json({ msg: 'number not found' })
                } else {
                    let query = await sequelize.query("SELECT username,pwd,CONCAT( fname_staff ,' ', lname_staff) AS 'name' FROM staff_register INNER JOIN login ON staff_register.idstaff_register = login.staff_id WHERE mob_staff = '" + number + "'")
                    if (query.length == 0) {
                        res.status(200).json({ msg: 'This number do not contain any data' })
                    } else {
                        res.status(200).json({ data: query })
                    }
                }
            }
        } catch (error) {
            res.status(500).json({ msg: 'Internal server error' })
        }
    }
    return {
        staffLogin,
    }
}
module.exports = Checker