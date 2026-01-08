import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cst")
export default class CstController {
  @operation({
    summary: "Get Cst",
  })
  @get()
  static getCst = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cst",
  })
  @post("{id}")
  static createCst = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
