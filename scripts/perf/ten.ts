import { Bench } from "tinybench";
import { GET as tenGET } from "../../src/app/api/ten/[[...vovk]]/route.ts";
import { POST as tenPOST } from "../../src/app/api/ten/[[...vovk]]/route.ts";

import type { NextRequest } from "next/server.js";

const bench = new Bench({ time: 100 });
const dummyReq = {} as unknown as NextRequest;
const dummyGETParams = {
  params: Promise.resolve({
    vovk: ["js"],
  }),
};

const dummyPOSTParams = {
  params: Promise.resolve({
    vovk: ["js", "123"],
  }),
};

bench
  .add("10 controller GET", async () => await tenGET(dummyReq, dummyGETParams))
  .add(
    "10 controller POST",
    async () => await tenPOST(dummyReq, dummyPOSTParams),
  );

await bench.run();
console.table(bench.table());
