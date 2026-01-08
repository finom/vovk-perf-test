import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lmm")
export default class LmmController {
  @operation({
    summary: "Get Lmm",
  })
  @get()
  static getLmm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmm",
  })
  @post("{id}")
  static createLmm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
