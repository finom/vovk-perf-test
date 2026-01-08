import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("btm")
export default class BtmController {
  @operation({
    summary: "Get Btm",
  })
  @get()
  static getBtm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btm",
  })
  @post("{id}")
  static createBtm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
