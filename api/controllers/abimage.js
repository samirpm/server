var fs=require('fs')
var sequelize = require('../../config/database')

const imageuploader = () => {
    const attachImage = async (req, res) => {
        const { body } = req;
        let image = body.image;
        let id = body.productId;
        let name = body.name;

        let sql = await sequelize.query("INSERT INTO ab_image(id,name)VALUE('" + id + "','" + name + "')", { type: sequelize.QueryTypes.INSERT })
        console.log(__dirname)
        if(!sql){
            res.status(200).json({msg:'data not inserted'})
        }
        var uploadpath=('D:/express-rest-api-boilerplate-master/image')
        
        res.status(200)
    }
        return {
            attachImage,
        }
    }
    module.exports = imageuploader;