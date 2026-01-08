import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mxs")
export default class MxsController {
  @operation({
    summary: "Get Mxs",
  })
  @get()
  static getMxs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxs",
  })
  @post("{id}")
  static createMxs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
