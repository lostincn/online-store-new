const { Basket } = require("../models/models");
const { ApiError } = require("../error/ApiError");

class BasketController{
    try {
        console.log(`updating GH repository`)
    } catch (error) {
        next(ApiError.badRequest(error.message))
    }
}

module.exports= new BasketController()