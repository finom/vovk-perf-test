import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mxd")
export default class MxdController {
  @operation({
    summary: "Get Mxd",
  })
  @get()
  static getMxd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxd",
  })
  @post("{id}")
  static createMxd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
