const Sequelize = require("../../config/database");


const journal = () => {
    const insert_journal = async (req, res) => {
        const { body } = req;
        try {
            var date = body.date;
            var debit = body.debit;
            var credit = body.credit;
            var memo = body.memo;
            var particular = body.particular;
            var narration = body.narration;
            var jvno = body.jvno;
            var ac = body.ac;
            var particularid = body.particularid;
            var moredetails = JSON.stringify(body.moredetails);

            let data = await Sequelize.query("INSERT INTO journal(Date,Debit,Credit,Memo,Particuler,Narration,jvno,ac,ParticulerId,moredetails)VALUE('" + date + "','" + debit + "','" + credit + "','" + memo + "','" + particular + "','" + narration + "','" + jvno + "','" + ac + "','" + particularid + "','" + moredetails + "')",{type: Sequelize.Querytypes.INSERT})
            console.log(data)

            res.status(200).json({ msg: "inserted successfully" })


        } catch (error) {
            res.status(500).json({ msg: "Internal server error" })
        }
    }
    const combained_journal = async(req, res) => {
        const { body } = req;
        try {
            let data ="select journal.`id`,`name`,`type`,journal.Date,journal.Debit,journal.Credit,journal.Memo,json_object('id',xx.id,'name',xx.name,'type',xx.type) as particular,journal.Narration from (select SupplierId as 'id',Supplier as 'name','supplier' as 'type' from supplier union select id as 'id',NAME as 'name','customer' as 'type'from customer union select id as 'id',fname_staff as 'name','staff' as 'type' from staff_register)xx  join journal on xx.id = journal.id;"
           
        } catch (error) {
            res.status(500).json({ msg: "Internal server error" })
        }

    }
    return {
        insert_journal,
        combained_journal
    }
}
module.exports = journal