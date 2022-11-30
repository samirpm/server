var sequelize = require('../../config/database')
const Sinca = () => {
    const HomeScreen = (req, res) => {

    }
    const NewOrder = async (req, res) => {
        try {
            let data = await sequelize.query("SELECT Name FROM items")
            let category = await sequelize.query("SELECT main FROM maincat")
            res.status(200).json({ data: data, category: category })
        } catch (error) {
            res.status(200).json({ msg: "Internal Server Error" })
        }
    }
    const NewOrdercategory = async (req, res) => {
        const { body } = req;
        var category = body.category ?? "";
        var whereCat = '';
        if (category != "") {
            whereCat = " WHERE Category = '" + category + "'"
        }
        try {
            let items = await sequelize.query("SELECT Name,SellingPrice FROM items " + whereCat)
            res.status(200).json({ items: items[0] })
        } catch (error) {
            res.status(200).json({ msg: "Internal Server Error" })
        }
    }

    return {
        HomeScreen,
        NewOrder,
        NewOrdercategory,
    }
}
module.exports = Sinca