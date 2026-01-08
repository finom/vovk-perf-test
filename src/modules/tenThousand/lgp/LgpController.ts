import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lgp")
export default class LgpController {
  @operation({
    summary: "Get Lgp",
  })
  @get()
  static getLgp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgp",
  })
  @post("{id}")
  static createLgp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
