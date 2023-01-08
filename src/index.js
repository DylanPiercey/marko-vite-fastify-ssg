import path from "path";
import fastify from "fastify";

export const app = fastify();

app.register(import("@marko/fastify"));
app.register(import("./pages/index"));
