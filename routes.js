module.exports = (app)=>{
    app.get("/", (req, res)=>{
        res.sendFile(`${__dirname}/views/landing.html`);
    });
}
