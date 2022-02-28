import app from "./server";
import "./database";

// Port configuration
app.set("PORT", process.env.PORT || 3001);

// APP execute
app.listen(app.get("PORT"), () => {
  console.log(`Server on port ${app.get("PORT")}`);
});
