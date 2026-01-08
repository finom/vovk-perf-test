import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bfg")
export default class BfgController {
  @operation({
    summary: "Get Bfg",
  })
  @get()
  static getBfg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfg",
  })
  @post("{id}")
  static createBfg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
