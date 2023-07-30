import {
    createTRPCProxyClient,
    httpBatchLink,
    inferRouterProxyClient,
} from "@trpc/client";
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "../../server/src/trpc.js";

const trpcClient = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: "http://localhost:8253/trpc",
        }),
    ],
});

(async () => {
    console.log(await trpcClient.callMe.query("friend"));
})();
