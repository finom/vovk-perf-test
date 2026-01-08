import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bfm")
export default class BfmController {
  @operation({
    summary: "Get Bfm",
  })
  @get()
  static getBfm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfm",
  })
  @post("{id}")
  static createBfm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
