import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lgn")
export default class LgnController {
  @operation({
    summary: "Get Lgn",
  })
  @get()
  static getLgn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgn",
  })
  @post("{id}")
  static createLgn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
