const express = require("express");
const app = express();
const port = 8000;
var faker = require('faker');



class User{
    constructor(){
        this._id = faker.datatype.uuid()
        this.firstName = faker.name.firstName()
        this.lasttName = faker.name.lasttName()
        this.phoneNumber = faker.name.phoneNumber()
        this.email = faker.name.email()
        this.password = faker.name.password()
    }
}
class Company{
    constructor(){
        this._id = faker.datatype.uuid()
        this.name = faker.name.name()
        this.addres = faker.name.addres(street, city, state, zipCode, country)

    }
}



app.get("/api/users/new", (req,res)=>{
    let newUser = new User()
    res.json({data: newUser})
})

app.get("/api/company/new", (req,res)=>{
    let newCompany = new Company()
    res.json({data: newCompany})
})

app.get("/api/user/company", (req,res)=>{
    let userCompany = new User(Company) 
    res.json({data: userCompany})
})





app.listen( port, () => console.log(`Listening on port: ${port}`) );