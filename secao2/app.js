const app = require("./config/server");

// const routeHome = require("./app/routes/home")(app);

// const routeFormularioNoticias = require("./app/routes/formularioNoticias")(app);

// const routeNoticias = require("./app/routes/noticias")(app);

const port = 8080;

app.listen(port, () => console.log(`Server started on port ${port}`));
