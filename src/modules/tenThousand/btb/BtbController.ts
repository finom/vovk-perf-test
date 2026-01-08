import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("btb")
export default class BtbController {
  @operation({
    summary: "Get Btb",
  })
  @get()
  static getBtb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btb",
  })
  @post("{id}")
  static createBtb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
