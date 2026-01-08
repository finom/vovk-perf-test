import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mxj")
export default class MxjController {
  @operation({
    summary: "Get Mxj",
  })
  @get()
  static getMxj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxj",
  })
  @post("{id}")
  static createMxj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
