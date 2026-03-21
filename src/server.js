require("dotenv").config();
const app = require("./app");
const ENV_CONFIG = require("./config/env-config");

app.listen(ENV_CONFIG.PORT, () => {
  console.log(`Server listening on  http://localhost:${ENV_CONFIG.PORT}`);
});
