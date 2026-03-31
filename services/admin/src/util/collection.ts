import { connectDB } from "../config/db";


export const getRestaurantCollection = async()=>{
    const db = await connectDB()

    return db.collection("restaurants")
}

export const getRiderCollection = async()=>{
    const db = await connectDB()

    return db.collection("riders")
}