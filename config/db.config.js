const mongoose = require("mongoose");
const MongoMemoryServer = require("mongodb-memory-server").MongoMemoryServer;

MongoMemoryServer.create().then((mongoServer) => {
    return mongoose.connect(mongoServer.getUri(), {
        useNewUrlParser: true,
        dbName: "express-crud",
        useUnifiedTopology: true,
    });
})
.then(() => console.info("Successful database connection!"))
.catch((error) => console.error(error));