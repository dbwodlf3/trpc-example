import { createTRPCProxyClient } from "@trpc/client";
import type { AppRouter } from "../../server/src/server";
const a = createTRPCProxyClient<AppRouter>({
  links: [],
});

console.log("What");
console.log(a);
