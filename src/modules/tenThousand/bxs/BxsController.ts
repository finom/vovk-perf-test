import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bxs")
export default class BxsController {
  @operation({
    summary: "Get Bxs",
  })
  @get()
  static getBxs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxs",
  })
  @post("{id}")
  static createBxs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
