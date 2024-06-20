module.exports = (app)=>{
    app.get("/", (req, res)=>{
        res.sendFile(`${__dirname}/views/landing.html`);
    });

    app.get("/landing.css", (req, res)=>{
        res.sendFile(`${__dirname}/views/landing.css`);
    });

    app.get("/insight-cat", (req, res)=>{
        res.sendFile(`${__dirname}/views/insightCat.html`);
    });

    app.get("/insight-cat.css", (req, res)=>{
        res.sendFile(`${__dirname}/views/insightCat.css`);
    })

    app.get("/image/:file", (req, res)=>{
        res.sendFile(`${__dirname}/views/images/${req.params.file}`);
    });
}
