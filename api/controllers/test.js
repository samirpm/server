var sequelize = require('../../config/database')

const Test = () => {
    const Task = async (req, res) => {
        try {
            var data = await sequelize.query("SELECT * FROM staff_workflow")
            if (data.length > 0) {
                res.status(200).json({ data: data [0]})
            }

        } catch (error) {
            res.status(500).json({ msg: "internal server error" })
        }
    }
    const Add_task = async (req, res) => {
        const { body } = req;
        try {
            var moredetails = body.moredetails;
            await sequelize.query("INSERT INTO staff_workflow(moredetails)VALUE('" + JSON.stringify(moredetails) + "')")
            res.status(200).json({ msg: "success" })
        } catch (error) {
            res.status(500).json({ msg: "internal server error" })
        }
    }
    const Edit_task = async (req, res) => {
        const { body } = req;
        try {
            var moredetails = body.moredetails;
            var id = body.id;
            await sequelize.query("UPDATE staff_workflow SET moredetails = '" + moredetails + "'WHERE id= " + id + "")
            res.status(200).json({msg:'updated'})
        } catch (error) {
            res.status(500).json({msg:'Internal server error'})
        }
    }
    const Delete_task=async(req,res)=>{
        const{body}=req;
        try {
            id =body.id;
            await sequelize.query("DELETE FROM staff_workflow WHERE id='"+id+"'")
            res.status(200).json({msg:"Deleted"})
        } catch (error) {
            res.status(500).json({msg:'Internal server error'})
        }

    }
    return {
        Task,
        Add_task,
        Edit_task,
        Delete_task,
    }
}
module.exports = Test