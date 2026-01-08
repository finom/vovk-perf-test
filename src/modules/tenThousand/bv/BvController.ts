import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bv")
export default class BvController {
  @operation({
    summary: "Get Bv",
  })
  @get()
  static getBv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bv",
  })
  @post("{id}")
  static createBv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
