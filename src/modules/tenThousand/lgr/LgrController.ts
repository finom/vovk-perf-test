import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lgr")
export default class LgrController {
  @operation({
    summary: "Get Lgr",
  })
  @get()
  static getLgr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgr",
  })
  @post("{id}")
  static createLgr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
