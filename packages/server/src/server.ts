import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import { publicProcedure, router } from "./trpc";

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({});

const appRouter = router({
  todoList: publicProcedure.query(async () => {
    const todos = "";

    return [
      { id: "1", message: "Todo 1" },
      { id: "2", message: "Todo 2" },
    ];
  }),
  todoCreate: publicProcedure
    .input((val: unknown) => {
      if (typeof val === "string") return val;
      throw new Error(`Invalid input: ${typeof val}`);
    })
    .query((opts) => {
      const { input } = opts;
      return input;
    }),
  todoById: publicProcedure
    .input((val: unknown) => {
      return val;
    })
    .query(() => {
      return "GOOD";
    }),
});

export type AppRouter = typeof appRouter;

const app = express();

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen("8253", () => {
  console.log(`server is listing ${8253}.`);
});
