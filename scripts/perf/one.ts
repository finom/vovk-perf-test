import { Bench } from 'tinybench';
import { GET, GET as oneGET } from '../../src/app/api/one/[[...vovk]]/route.ts';
import { POST as onePOST } from '../../src/app/api/one/[[...vovk]]/route.ts';

import type { NextRequest } from 'next/server.js';

const bench = new Bench({ time: 100 });
const dummyReq = {} as unknown as NextRequest;
const dummyGETParams = { params: Promise.resolve({
    vovk: ['as']
}) };

const dummyPOSTParams = { params: Promise.resolve({
    vovk: ['as', '123']
}) };

let coldStartIndex = 0;

bench
    .add('1 controller GET', async () => await oneGET(dummyReq, dummyGETParams))
    .add('1 controller POST', async () => await onePOST(dummyReq, dummyPOSTParams))
    .add('Cold start import', () => import('../../src/app/api/one/[[...vovk]]/route.ts?cacheBust=' + (coldStartIndex++)));

await bench.run();
console.table(bench.table());