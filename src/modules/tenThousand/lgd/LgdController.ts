import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lgd")
export default class LgdController {
  @operation({
    summary: "Get Lgd",
  })
  @get()
  static getLgd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgd",
  })
  @post("{id}")
  static createLgd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
