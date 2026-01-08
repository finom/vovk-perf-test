import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mxv")
export default class MxvController {
  @operation({
    summary: "Get Mxv",
  })
  @get()
  static getMxv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxv",
  })
  @post("{id}")
  static createMxv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
