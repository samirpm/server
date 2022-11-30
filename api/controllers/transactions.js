 
var sequelize = require('../../config/database')

const Home =()=>{
    const transactionPage = async(req,res)=>{
        let data =await sequelize.query("SELECT * FROM category", { type: sequelize.QueryTypes.SELECT})
        if(data){
            res.status(200).json({data})
        }else{
            res.status(500).json({msg:'selection failed'})
        }
    }
    const CategoryIncome = async(req,res)=>{
        let data =await sequelize.query("SELECT * FROM category WHERE category LIKE '%income%' ", { type: sequelize.QueryTypes.SELECT})
        res.status(200).json({data})
    }
    const CategoryExpense= async(req,res)=>{
        let data =await sequelize.query("SELECT * FROM category WHERE category LIKE '%expense%' ", { type: sequelize.QueryTypes.SELECT})
        res.status(200).json({data})
    }
    const Insertion=async(req,res)=>{
        const {body}=req;
        let data=await sequelize.query("INSERT INTO category(amount,type,date,category)VALUE('"+body.amount+"','"+body.type+"','"+body.date+"','"+body.category+"')",{type: sequelize.QueryTypes.INSERT})
        res.status(200).json({data})
    }
    const Deletion=async(req,res)=>{
        const {body}=req;
        await sequelize.query("DELETE * FROM category WHERE id='"+body.id+"' ",{type: sequelize.QueryTypes.DELETE})
        res.status(200).json({msg:'Insertion Successfull'})
    }
    return{
        transactionPage,
        CategoryIncome,
        CategoryExpense,
        Insertion,
        Deletion
    }
}
module.exports = Home;
