import Express from "express";
import authRoute from "./routes/auth.js";
import jobsRoute from "./routes/jobs.js";
import employeesRoute from "./routes/employees.js";
import employersRoute from "./routes/employers.js";

const app = Express();

app.use("/api/auth", authRoute);
app.use("/api/jobs", jobsRoute);
app.use("/api/employees", employeesRoute);
app.use("/api/employers", employersRoute);

app.listen(8800, () => {
  console.log("API WORKING");
});
