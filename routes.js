module.exports = (app)=>{
    app.get("/", (req, res)=>{
        res.sendFile(`${__dirname}/views/landing.html`);
    });

    app.get("/landing.css", (req, res)=>{
        res.sendFile(`${__dirname}/views/landing.css`);
    })

    app.get("/image/:file", (req, res)=>{
        res.sendFile(`${__dirname}/views/images/${req.params.file}`);
    });
}
