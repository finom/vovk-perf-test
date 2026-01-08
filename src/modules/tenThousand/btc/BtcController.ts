import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("btc")
export default class BtcController {
  @operation({
    summary: "Get Btc",
  })
  @get()
  static getBtc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btc",
  })
  @post("{id}")
  static createBtc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
