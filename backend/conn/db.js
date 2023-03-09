import mongoose from 'mongoose'
const ConnectDB=async()=>{
try {
    const conn =await mongoose.connect(process.env.MONGO_URI)
    console.log(`db connected ${conn.connection.host}`.cyan.underline);
} catch (error) {
    console.log(`error : ${error.message}`.red.underline.bold)
    process.exit(1)
}
}
export default ConnectDB