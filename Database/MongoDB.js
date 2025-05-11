const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://jigarunagar:oUmiSAxMwqRKI180@cluster0.zsieghq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });
        console.log("MongoDB connected");
    } catch (err) {
        console.error("MongoDB error:", err);
    } 
}
connectDB();

module.exports = mongoose;
 