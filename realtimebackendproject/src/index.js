// require('dotenv').config({path:'./env'})
import dontenv from 'dotenv'
import ConnectedBD from './db/index.js'
import app from  './app.js'

dontenv.config({
    path:'./env'
})

ConnectedBD()
.then(()=>{
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`😊😊😊 Server is running posrt number ${process.env.PORT}`);
  })
})
.catch((err)=>{
  console.log("Mongos Db connection faield !!! ",err)
})





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
