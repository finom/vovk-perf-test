import { Bench } from 'tinybench';
import { GET as thousandGET } from '../../src/app/api/thousand/[[...vovk]]/route.ts';
import { POST as thousandPOST } from '../../src/app/api/thousand/[[...vovk]]/route.ts';

import type { NextRequest } from 'next/server.js';

const bench = new Bench({ time: 100 });
const dummyReq = {} as unknown as NextRequest;
const dummyGETParams = { params: Promise.resolve({
    vovk: ['alls']
}) };

const dummyPOSTParams = { params: Promise.resolve({
    vovk: ['alls', '123']
}) };

bench
    .add('1_000 controller GET', async () => await thousandGET(dummyReq, dummyGETParams))
    .add('1_000 controller POST', async () => await thousandPOST(dummyReq, dummyPOSTParams))
;

await bench.run();
console.table(bench.table());