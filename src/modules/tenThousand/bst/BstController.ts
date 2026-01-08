import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bst")
export default class BstController {
  @operation({
    summary: "Get Bst",
  })
  @get()
  static getBst = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bst",
  })
  @post("{id}")
  static createBst = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
