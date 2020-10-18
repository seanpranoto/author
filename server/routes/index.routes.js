const Author =require("../controllers/index.controller");

module.exports=app=>{
    app.get("/api/author", Author.findAll);
    app.get("/api/author/:id", Author.findOne);
    app.put("/api/author/:id", Author.update);
    app.post("/api/author/", Author.create);
    app.delete("/api/author/:id", Author.delete);
};