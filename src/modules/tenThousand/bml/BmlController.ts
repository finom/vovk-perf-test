import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bml")
export default class BmlController {
  @operation({
    summary: "Get Bml",
  })
  @get()
  static getBml = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bml",
  })
  @post("{id}")
  static createBml = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
