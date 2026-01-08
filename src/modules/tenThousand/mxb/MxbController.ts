import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mxb")
export default class MxbController {
  @operation({
    summary: "Get Mxb",
  })
  @get()
  static getMxb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxb",
  })
  @post("{id}")
  static createMxb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
