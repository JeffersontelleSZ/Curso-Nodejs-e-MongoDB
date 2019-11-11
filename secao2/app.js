// Require Server
const app = require("./config/server");

// Port
const port = 8080;

// Started Server
app.listen(port, () => console.log(`Server started on port ${port}`));
