import { Bench } from 'tinybench';
import { GET as hundredGET } from '../../src/app/api/hundred/[[...vovk]]/route.ts';
import { POST as hundredPOST } from '../../src/app/api/hundred/[[...vovk]]/route.ts';

import type { NextRequest } from 'next/server.js';

const bench = new Bench({ time: 100 });
const dummyReq = {} as unknown as NextRequest;
const dummyGETParams = { params: Promise.resolve({
    vovk: ['cvs']
}) };

const dummyPOSTParams = { params: Promise.resolve({
    vovk: ['cvs', '123']
}) };

bench
    .add('100 controller GET', async () => await hundredGET(dummyReq, dummyGETParams))
    .add('100 controller POST', async () => await hundredPOST(dummyReq, dummyPOSTParams))
;

await bench.run();
console.table(bench.table());