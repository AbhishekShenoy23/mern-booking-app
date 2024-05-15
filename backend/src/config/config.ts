import dotenv from "dotenv";

dotenv.config();

const config = {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  mongo_uri: process.env.MONGODB_URL,
  tokensecret: process.env.TOKEN_SECRET,
};

//to make this config read only .. we use object.freeze.
export const _config = Object.freeze(config);
