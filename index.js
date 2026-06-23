const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Lampa Railway server is running");
});

app.get("/plugin.js", (req, res) => {
    res.setHeader("Content-Type", "application/javascript");

    res.send(`
        (function(){

            function start(){

                if(!window.Lampa) return;

                Lampa.Noty.show("Railway plugin loaded");

                Lampa.Source.add('railway_source', {

                    title: 'Railway Source',

                    search: function(q, cb){

                        cb([
                            { title: "Movie 1" },
                            { title: "Movie 2" }
                        ]);

                    }

                });

            }

            if(window.appready) start();
            else document.addEventListener("appready", start);

        })();
    `);
});

app.listen(process.env.PORT || 3000, "0.0.0.0", () => {
    console.log("Server running");
});
