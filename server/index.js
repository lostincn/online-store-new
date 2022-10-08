const path = require("path");
require("dotenv").config({ path: "./.env" });
// const { config } = require("dotenv");
// const parsedEnvConf = config({ path: "./.env" }).parsed;
// console.log(parsedEnvConf, "!");
const express = require(`express`);
const models = require("./models/models");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const sequelize = require(`./db`);
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);

//Обработка ошибок, последний-замыкающий Middleware в очереди, так как он замыкающий и при малейшей ошибке дальнейшее выполнение программы будетостановлено
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () =>
      console.log(`Server started on port ${PORT} and is WORKING!!!`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
