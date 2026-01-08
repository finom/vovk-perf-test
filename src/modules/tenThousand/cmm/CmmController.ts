import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cmm")
export default class CmmController {
  @operation({
    summary: "Get Cmm",
  })
  @get()
  static getCmm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmm",
  })
  @post("{id}")
  static createCmm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
