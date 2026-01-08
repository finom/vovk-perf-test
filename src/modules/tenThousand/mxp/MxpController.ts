import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mxp")
export default class MxpController {
  @operation({
    summary: "Get Mxp",
  })
  @get()
  static getMxp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxp",
  })
  @post("{id}")
  static createMxp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
