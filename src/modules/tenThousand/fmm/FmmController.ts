import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fmm")
export default class FmmController {
  @operation({
    summary: "Get Fmm",
  })
  @get()
  static getFmm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmm",
  })
  @post("{id}")
  static createFmm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
