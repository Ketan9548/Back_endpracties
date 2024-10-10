import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const ConnectedBD = async () => {
  try {
    const connectedinstance = await mongoose.connect(
      `${process.env.MONGOOS_URL}/${DB_Name}`
    );
    console.log(
      `\n mongoDB Connected !! DB Host: ${connectedinstance.connection.host}`
    );
  } catch (error) {
    console.error("Mongoose Db Connection Failed: ", error);
    throw error;
  }
  console.log("the envirments are: ", process.env.MONGOOS_URL);
};

export default ConnectedBD;
