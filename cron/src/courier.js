import dotenv from "dotenv";
import { CourierClient } from "@trycourier/courier";
dotenv.config();
const courier = CourierClient({ authorizationToken: process.env.COURIER_KEY });

export default courier;