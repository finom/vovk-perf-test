import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("btl")
export default class BtlController {
  @operation({
    summary: "Get Btl",
  })
  @get()
  static getBtl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btl",
  })
  @post("{id}")
  static createBtl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
