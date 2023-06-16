import { toMatchDesign } from "@engi.network/design-matcher";

// import dotenv from "dotenv";
// dotenv.config();
// optionally specify a file other than .env
// dotenv.config({ path: "./.env.development.local" });

expect.extend({ toMatchDesign });
