import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mxz")
export default class MxzController {
  @operation({
    summary: "Get Mxz",
  })
  @get()
  static getMxz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxz",
  })
  @post("{id}")
  static createMxz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
