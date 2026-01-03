import { Bench } from "tinybench";
import { GET as tenThousandGET } from "../../src/app/api/tenThousand/[[...vovk]]/route.ts";
import { POST as tenThousandPOST } from "../../src/app/api/tenThousand/[[...vovk]]/route.ts";

import type { NextRequest } from "next/server.js";

const bench = new Bench({ time: 100 });
const dummyReq = {} as unknown as NextRequest;
const dummyGETParams = {
  params: Promise.resolve({
    vovk: ["ntps"],
  }),
};

const dummyPOSTParams = {
  params: Promise.resolve({
    vovk: ["ntps", "123"],
  }),
};

let coldStartIndex = 0;

bench
  .add(
    "10_000 controller GET",
    async () => await tenThousandGET(dummyReq, dummyGETParams),
  )
  .add(
    "10_000 controller POST",
    async () => await tenThousandPOST(dummyReq, dummyPOSTParams),
  )

await bench.run();
console.table(bench.table());
