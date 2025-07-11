import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://excelskennedy:100625@cluster0.2impiyc.mongodb.net/food-del').then(() => console.log("DB Connected"));
}