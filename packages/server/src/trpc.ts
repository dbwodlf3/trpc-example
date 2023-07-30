import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

const createContext = ({
    req,
    res,
}: trpcExpress.CreateExpressContextOptions) => ({});

const appRouter = router({
    todoList: publicProcedure.query<{}>(async () => {
        const todos = "";

        return [
            { id: "1", message: "Todo 1" },
            { id: "2", message: "Todo 2" },
        ];
    }),
    callMe: publicProcedure
        .input((val: unknown) => {
            if (typeof val === "string") return val;
            throw new Error(
                `Invalid input: expected string, got ${typeof val}`
            );
        })
        .query(() => {
            return "Hello tRPC";
        }),
});

export const trpcMiddleWare = trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
});

export type AppRouter = typeof appRouter;
