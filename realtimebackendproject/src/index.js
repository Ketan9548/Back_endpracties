// require('dotenv').config({path:'./env'})
import dontenv from 'dotenv'
import ConnectedBD from './db/index.js'

dontenv.config({
    path:'./env'
})

ConnectedBD()






/*
import mongoose from "mongoose";
import { DB_Name } from "./constants";
import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGOOS_URL}/${DB_Name}`);
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on Port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error is: ", error);
    throw error;
  }
})();
 */
