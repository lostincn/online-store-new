const { Basket } = require("../models/models");
const { ApiError } = require("../error/ApiError");

class BasketController{
    try {
        console.log(`testing new branch`)
    } catch (error) {
        next(ApiError.badRequest(error.message))
    }
}

module.exports= new BasketController()