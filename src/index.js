import dva from "dva";
import "./index.css";

// 1. Initialize
// const app = dva();
const app = dva({
  initialState: {
    products: [
      { name: "dva", id: 1 },
      { name: "antd", id: 2 },
    ],
  },
});

// 2. Plugins
// app.use({});

// 3. Model
const models = require.context("./models", false, /\.js$/);
models.keys().forEach((item) => app.model(models(item).default));

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");