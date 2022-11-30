const Sequelize = require("../../config/database")


export class NewOrder{
    constructor(name,number,email,password){
        this.name=name
        this.number=number
        this.email=email
        this.password=password

    }
}